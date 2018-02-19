// Library dependencies to be added to the Particle Simple project.properties
// dependencies.Adafruit_LIS3DH=1.0.3
// dependencies.Adafruit_GPS=1.0.3
// dependencies.AssetTracker=0.0.10
// dependencies.CellularHelper=0.0.4
// dependencies.OneWire=2.0.1
// dependencies.Adafruit_Sensor=1.0.2
// dependencies.google-maps-device-locator=0.0.4
#include <google-maps-device-locator.h>
#include <OneWire.h>
#include <AssetTracker.h>

// Dallas DS18B20 initialization
OneWire ds = OneWire(D4);  // 1-wire signal on pin D4
float lastTemp;

// Adafruit LIS3DH Triple Axis Accelerometer on the Particle Asset Tracker v2 PCB
// Accelerometer Threshold to trigger a publish
// 9000 is very sensitive, 12000 will detect small bumps
int AccelThreshold = 12000;
String MaxAccelJSON;
int MaxAccelThisInterval = 0;

// Creating an AssetTracker named 't'
GoogleMapsDeviceLocator locator;
AssetTracker t = AssetTracker();
int ledonboard = D7;  // Light the onboard Particle LED when in Tracking mode 

void setup() {
   // Sets up all the necessary AssetTracker bits
   t.begin();

   Serial.begin(9600);

   // Declare a Particle.function so that we can adjust the Asset Tracking on and off reporting interval from the cloud.
   Particle.function("SetInterval",AssetTrackerSetReportInterval);

   // Declare a Particle.function so that we can query the current temperature from the cloud.
   Particle.function("GetCurrTemp",AssetTrackerGetCurrentTemp);

   // Declare a Particle.function so that we can adjust the accelerometer threshold from the cloud.
   Particle.function("SetXYZThresh",AssetTrackerSetAccelThresh);

   // Declare a Particle.function so that we can query recent accelerometer data from the cloud.
   Particle.function("GetRecentXYZ",AssetTrackerGetRecentAccel);


   // Set the returned location handler function by the locationCallback() method
   // Initialize the Asset Tracker to check in once a Day 60*60*24
   locator.withSubscribe(AssetTrackerLocationCallback).withLocatePeriodic(86400);

   // Give this Electron a name so we can identify it
//  locator.withEventName("blockchain-iot-asset-tracker1");
//  locator.withLocatePeriodic(60);

   // LED pin configuration
   pinMode(ledonboard, OUTPUT);

   // Turn off LED on the Particle board when the application starts
   digitalWrite(ledonboard, LOW);
}


// Remotely change the accelerometer trigger threshold
int AssetTrackerSetAccelThresh( String command ) {
    // Try to convert Srting to an integer
    int NewAccelThreshold = command.toInt();
    // Disgard any non-integer command strings sent from the cloud
    if ( NewAccelThreshold > 0) {
        AccelThreshold = NewAccelThreshold;
        Serial.print("Accelerometer Threshold now set to : ");
        Serial.println(command);
        return 1;
    }
    // Keep the predefined Threshold if function received garbage
    return 0;
}


int AssetTrackerSetReportInterval( String command ) {
    /* Particle.functions always take a string as an argument and return an integer.
    Since we can pass a string, it means that we can give the program commands on how the function should be used.
    In this case, telling the function a string that contains a Number will set the AssetTracker delay
    and telling it "off", 0 or some bogus command will turn the AssetTracker off.
    Then, the function returns a value to us to let us know what happened.
    In this case, it will return :
	New Delay value - when the Cellular Asset Tracker is turning on
	0 when the Cellular Asset Tracker is turning off,
    */
    int Delay = command.toInt();
    if( Delay > 0 ) {
        locator.withSubscribe(AssetTrackerLocationCallback).withLocatePeriodic(Delay);
        digitalWrite(ledonboard,HIGH);
        Serial.print("Enabling Asset Location reporting interval:");
	Serial.println(command);
        return Delay;
    } else {
	// Any invalid string that doesn't convert to a number or 0 should be considered "Off"
	// "once a day" to be sufficiently large to be OFF
        locator.withSubscribe(AssetTrackerLocationCallback).withLocatePeriodic(86400);
        digitalWrite(ledonboard,LOW);
        Serial.println("Disabling Asset Location reporting");
        return 0;
    }

}


int AssetTrackerGetCurrentTemp(String Coordinates ) {
    byte i;
    byte present = 0;
    byte type_s;
    byte data[12];
    byte addr[8];
    float celsius, fahrenheit;
    int  init = 0;

    // wait to initialize / find the chip
    while( init < 10 ) {
        if ( !ds.search(addr)) {
            Serial.println("Searching for Temperature Sensor...");
            ds.reset_search();
            delay(250);
            init++;
        } else {
            init = 10; // found
        }
    }

    // The order is changed a bit in this example
    // first the returned address is printed
    Serial.print("ROM =");
    for( i = 0; i < 8; i++) {
        Serial.write(' ');
        Serial.print(addr[i], HEX);
    }

    // second the CRC is checked, on fail,
    // print error and just return to try again
    if (OneWire::crc8(addr, 7) != addr[7]) {
        Serial.println("CRC is not valid!");
        return 0;
    }
    Serial.println();

    // we have a good address at this point
    // what kind of chip do we have?
    // we will set a type_s value for known types or just return

    // the first ROM byte indicates which chip
    switch (addr[0]) {
        case 0x10:
            Serial.println("  Chip = DS1820/DS18S20");
            type_s = 1;
            break;
        case 0x28:
            Serial.println("  Chip = DS18B20");
            type_s = 0;
            break;
        case 0x22:
            Serial.println("  Chip = DS1822");
            type_s = 0;
            break;
        case 0x26:
            Serial.println("  Chip = DS2438");
            type_s = 2;
            break;
        default:
            Serial.println("Unknown device type.");
            return 0;
    }

    // this device has temp so let's read it
    ds.reset();               // first clear the 1-wire bus
    ds.select(addr);          // now select the device we just found
    // ds.write(0x44, 1);     // tell it to start a conversion, with parasite power on at the end
    ds.write(0x44, 0);        // or start conversion in powered mode (bus finishes low)

    // just wait a second while the conversion takes place
    // different chips have different conversion times, check the specs, 1 sec is worse case + 250ms
    // you could also communicate with other devices if you like but you would need
    // to already know their address to select them.
    delay(1000);     // maybe 750ms is enough, maybe not, wait 1 sec for conversion

    // we might do a ds.depower() (parasite) here, but the reset will take care of it.

    // first make sure current values are in the scratch pad
    present = ds.reset();
    ds.select(addr);
    ds.write(0xB8,0);         // Recall Memory 0
    ds.write(0x00,0);         // Recall Memory 0

    // now read the scratch pad
    present = ds.reset();
    ds.select(addr);
    ds.write(0xBE,0);         // Read Scratchpad
    if (type_s == 2) {
        ds.write(0x00,0);     // The DS2438 needs a page# to read
    }

    // transfer and print the values
    Serial.print("  Data = ");
    Serial.print(present, HEX);
    Serial.print(" ");
    for ( i = 0; i < 9; i++) {    // we need 9 bytes
        data[i] = ds.read();
        Serial.print(data[i], HEX);
        Serial.print(" ");
    }
    Serial.print(" CRC=");
    Serial.print(OneWire::crc8(data, 8), HEX);
    Serial.println();

    // Convert the data to actual temperature
    // because the result is a 16 bit signed integer, it should
    // be stored to an "int16_t" type, which is always 16 bits
    // even when compiled on a 32 bit processor.
    int16_t raw = (data[1] << 8) | data[0];
    if (type_s == 2) raw = (data[2] << 8) | data[1];
    byte cfg = (data[4] & 0x60);

    switch (type_s) {
        case 1:
            raw = raw << 3; // 9 bit resolution default
            if (data[7] == 0x10) {
                // "count remain" gives full 12 bit resolution
                raw = (raw & 0xFFF0) + 12 - data[6];
            }
            celsius = (float)raw * 0.0625;
            break;
        case 0:
            // at lower res, the low bits are undefined, so let's zero them
            if (cfg == 0x00) raw = raw & ~7;  // 9 bit resolution, 93.75 ms
            if (cfg == 0x20) raw = raw & ~3; // 10 bit res, 187.5 ms
            if (cfg == 0x40) raw = raw & ~1; // 11 bit res, 375 ms
            // default is 12 bit resolution, 750 ms conversion time
            celsius = (float)raw * 0.0625;
            break;

        case 2:
            data[1] = (data[1] >> 3) & 0x1f;
            if (data[2] > 127) {
                celsius = (float)data[2] - ((float)data[1] * .03125);
            } else {
                celsius = (float)data[2] + ((float)data[1] * .03125);
            }
    }

    // remove random errors
    if((((celsius <= 0 && celsius > -1) && lastTemp > 5)) || celsius > 125) {
        celsius = lastTemp;
    }

    fahrenheit = celsius * 1.8 + 32.0;
    lastTemp = celsius;

    // now that we have the readings, we can publish them to the cloud
    // store celsius and fahrenheit temp readings in "temperature" stringified JSON
    String temperature = String::format("{\"Celsius\":%f,\"Fahrenheit\":%f}", celsius, fahrenheit );
    String TempPlusLocation;
    if( Coordinates.length() != 0) {
       TempPlusLocation = String("{\"Temp\":"+temperature+",\"gps\":"+Coordinates+"}");
    } else {
       TempPlusLocation = String("{\"Temp\":"+temperature+"}"); // This was a web query, location unknown
    }
    Particle.publish("AssetTrackerTemperatureEvent", TempPlusLocation, PRIVATE); // publish to cloud
    Serial.print( "Sending AssetTrackerTemperatureEvent : " );
    Serial.println( TempPlusLocation );
    return (int)fahrenheit ;
}


int AssetTrackerGetRecentAccel( String Coordinates ) {
    // Check if there's been a big acceleration
    // Report the largest acceleration detected during the prior time interval
    if ( MaxAccelThisInterval ) {
        String AccelPlusLocation;
        if( Coordinates.length() != 0) {
	    AccelPlusLocation = String("{\"Accel\":"+MaxAccelJSON+",\"gps\":"+Coordinates+"}");
	} else {
	    AccelPlusLocation = String("{\"Accel\":"+MaxAccelJSON+"}"); // This was a web query, location unknown
	}
        Particle.publish("AssetTrackerAccelerationEvent", AccelPlusLocation, 60, PRIVATE);
        Serial.print( "Sending AssetTrackerAccelerationEvent : " );
        Serial.println( AccelPlusLocation );
    }

    // Report the Max Acceleration back to Particle Function return code
    // Reset the Max Acceleration for the next time interval to zero
    int reportMaxAccel = MaxAccelThisInterval;
    MaxAccelThisInterval = 0;
    return reportMaxAccel;
}


void AssetTrackerLocationCallback(float lat, float lon, float accuracy) {
    // Handle the returned location data for the device. This method is passed three arguments:
    // - Latitude
    // - Longitude
    // - Accuracy of estimated location (in meters)
    String Coordinates;
    Coordinates = String::format("{\"lat\":%f,\"lon\":%f,\"accuracy\":%d}", lat, lon, accuracy);

    // Check here if the Particle Asset Tracker v2 built-in GPS can get a more accurate geolocation
    // than the Cellular Tower Triangulation. Consumes more power but improves accuracy.

    // Report the temperture at this location.
    AssetTrackerGetCurrentTemp( Coordinates );

    // Determine if there has been a big acceleration event in the past interval
    AssetTrackerGetRecentAccel( Coordinates );
}


void loop() {
    locator.loop();

    // Check if there's been a big acceleration
    // Save only the largest acceleration detected during the prior time period
    int CurrentAccelmagnitude = t.readXYZmagnitude();
    if (CurrentAccelmagnitude > AccelThreshold && CurrentAccelmagnitude > MaxAccelThisInterval) {
        // Format a JSON Object to be parsed in the cloud {x:X,y:Y,z:Z}
	// Save a stringified JSON object 
        MaxAccelJSON = String::format("{\"x\":%d,\"y\":%d,\"z\":%d}", t.readX(), t.readY(), t.readZ());
        Serial.print( "AccelerationEvent triggered: " );
        Serial.println( MaxAccelJSON );
        MaxAccelThisInterval = CurrentAccelmagnitude;
    }
}
