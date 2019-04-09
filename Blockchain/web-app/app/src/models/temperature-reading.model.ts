/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - TemperatureReading
 * A transaction named TemperatureReading
 */
@model({name: 'TemperatureReading'})
export class TemperatureReading {
  constructor(data?: Partial<TemperatureReading>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.acme.shipping.perishable.TemperatureReading';

  /**
   * 
   */
  @property({name: 'celsius', required: true})
  celsius: number;

  /**
   * 
   */
  @property({name: 'latitude', required: true})
  latitude: string;

  /**
   * 
   */
  @property({name: 'longitude', required: true})
  longitude: string;

  /**
   * 
   */
  @property({name: 'readingTime', required: true})
  readingTime: string;

  /**
   * shipment Id of this reading
   */
  @property({name: 'shipmentId', required: true})
  shipmentId: string;

  /**
   * The instance identifier for this type
   */
  @property({name: 'transactionId'})
  transactionId?: string;

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: Date;

}

