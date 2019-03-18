/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - AccelReading
 * A transaction named AccelReading
 */
@model({name: 'AccelReading'})
export class AccelReading {
  constructor(data?: Partial<AccelReading>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.acme.shipping.perishable.AccelReading';

  /**
   * 
   */
  @property({name: 'accel_x', required: true})
  accel_x: number;

  /**
   * 
   */
  @property({name: 'accel_y', required: true})
  accel_y: number;

  /**
   * 
   */
  @property({name: 'accel_z', required: true})
  accel_z: number;

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
   * 
   */
  @property({name: 'shipment', required: true})
  shipment: {
  
};

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

