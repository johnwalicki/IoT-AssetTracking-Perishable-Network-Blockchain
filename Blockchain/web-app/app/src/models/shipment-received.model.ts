/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ShipmentReceived
 * A transaction named ShipmentReceived
 */
@model({name: 'ShipmentReceived'})
export class ShipmentReceived {
  constructor(data?: Partial<ShipmentReceived>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.acme.shipping.perishable.ShipmentReceived';

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

