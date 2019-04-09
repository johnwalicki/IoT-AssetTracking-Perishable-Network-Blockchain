/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';


@model({name: 'SetupShipment'})
export class SetupShipment {
  constructor(data?: Partial<SetupShipment>) {
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
   * The Shipment ID - Required.
   */
  @property({name: 'shipmentId', required: true})
  shipmentId: string 

  /**
   * The Grower's email
   */
  @property({name: 'growerEmail', required: true})
  growerEmail: string 

  /**
   * The Shipper's email
   */
  @property({name: 'shipperEmail', required: true})
  shipperEmail: string 

   /**
   * The Importer's email
   */
  @property({name: 'importerEmail', required: true})
  importerEmail: string 

  /**
   * The Contract Id
   */
  @property({name: 'contractId', required: true})
  contractId: string 

  /**
   * 
   */
  @property({name: 'timestamp'})
  timestamp?: Date;

}

