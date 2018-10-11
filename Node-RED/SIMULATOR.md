# Route Simulator for the Blockchain IoT Asset Tracker

## Introduction

If you have not purchased a Particle Electron but are interested in completing
the [IoT Asset Tracking using Hyperledger Blockchain IBM Code Pattern](https://developer.ibm.com/code/patterns/develop-an-iot-asset-tracking-app-using-blockchain/), you can
use the instructions on this page to create a simulated route and generate
some temperature transactions that will be written to the
IoT Asset Tracker Blockchain history.

This Node-RED flow replaces the physical Particle Electron.  You can
optionally use the technique described below to create your own route and
temperature event thresholds.

## Use Case - Simulated Bicycle Ride through New York City Central Park
In the below Node-RED flow, the simulator plots a course around Central Park
New York City.  The story might be that you want to use the IoT Asset Tracker
to track a bicycle ride through the park on a nice day. The rough outline is to generate the real GPS coordinates, fake timestamps, fake temperature, fake vibration data then play it all into your Blockchain.

You can create your own use case stories with simulated routes / simulated data and then play that data into the Blockchain.

### General Technique
- There is a [OnTheGoMap website](https://onthegomap.com/#/create) that allows you to plot a route on a world map.
- Create your route using [OnTheGoMap](https://onthegomap.com/#/create)
- Click on the **Menu** in the upper right corner
- Select **Export as GPX**
- **Save** the file to your local system.
- **Inspect** this xml file.  Depending on the length of your route, it will likely contain thousands of geocode waypoints.
- Too much accuracy, you don't really want to load thousands of geolocation transactions into the Blockchain.  You probably only need a few hundred.
- The Node-RED dashboard that you will build in the final section advances the little icon at 1 geolocation transaction per second.  No one wants to watch your demo truck icon creep along a route for dozens of minutes to complete. Slice the data down to maybe 2-3 minutes per route.  Determine the appropriate modulo to prune the data.  Unix is awesome for this and there are several CLI  tools that can help you slice the data:
```
$ awk '0 == NR % 14'  onthegomap-6.4-mi-route-route.gps
$ sed -n '0-14p'   onthegomap-6.4-mi-route-route.gps
```
- Now, we can load those abbreviated geolocation coordinates into the blockchain.

## Node-RED Flow to load the Blockchain

more words here....
- Import the flow into your Node-RED
As a first step, copy the code from GitHub to your Clipboard and import it into your Node-RED editor.

Get the Code [Simulator Node-RED flow for IoT Asset Tracker](flows/IoTAssetTracker-SimulatedRoute.json)
