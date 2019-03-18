/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';
import {TemperatureReading} from './temperature-reading.model';
import {AccelReading} from './accel-reading.model';
import {GpsReading} from './gps-reading.model';

/**
 * The model class is generated from OpenAPI schema - Shipment
 * An asset named Shipment
 */
@model({name: 'Shipment'})
export class Shipment {
  constructor(data?: Partial<Shipment>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.acme.shipping.perishable.Shipment';

  /**
   * The instance identifier for this type
   */
  @property({name: 'shipmentId', required: true})
  shipmentId: string;

  /**
   * 
   */
  @property({name: 'type', required: true})
  type: 'BANANAS' | 'APPLES' | 'PEARS' | 'PEACHES' | 'COFFEE' | 'MEDICINE';

  /**
   * 
   */
  @property({name: 'status', required: true})
  status: 'CREATED' | 'IN_TRANSIT' | 'ARRIVED';

  /**
   * 
   */
  @property({name: 'unitCount', required: true})
  unitCount: number;

  /**
   * 
   */
  @property({name: 'contract', required: true})
  contract: {
  
};

  /**
   * 
   */
  @property.array(TemperatureReading, {name: 'temperatureReadings'})
  temperatureReadings?: TemperatureReading[];

  /**
   * 
   */
  @property.array(AccelReading, {name: 'AccelReadings'})
  AccelReadings?: AccelReading[];

  /**
   * 
   */
  @property.array(GpsReading, {name: 'gpsReadings'})
  gpsReadings?: GpsReading[];

}

