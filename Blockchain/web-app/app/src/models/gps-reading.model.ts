/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - GpsReading
 * A transaction named GpsReading
 */
@model({name: 'GpsReading'})
export class GpsReading {
  constructor(data?: Partial<GpsReading>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.acme.shipping.perishable.GpsReading';

  /**
   * 
   */
  @property({name: 'readingTime', required: true})
  readingTime: string;

  /**
   * 
   */
  @property({name: 'readingDate', required: true})
  readingDate: string;

  /**
   * 
   */
  @property({name: 'latitude', required: true})
  latitude: string;

  /**
   * 
   */
  @property({name: 'latitudeDir', required: true})
  latitudeDir: 'N' | 'S' | 'E' | 'W';

  /**
   * 
   */
  @property({name: 'longitude', required: true})
  longitude: string;

  /**
   * 
   */
  @property({name: 'longitudeDir', required: true})
  longitudeDir: 'N' | 'S' | 'E' | 'W';

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

