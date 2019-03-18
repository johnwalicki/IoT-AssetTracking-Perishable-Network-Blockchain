/* tslint:disable:no-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Contract
 * An asset named Contract
 */
@model({name: 'Contract'})
export class Contract {
  constructor(data?: Partial<Contract>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * The class identifier for this type
   */
  @property({name: '$class'})
  $class?: string = 'org.acme.shipping.perishable.Contract';

  /**
   * The instance identifier for this type
   */
  @property({name: 'contractId', required: true})
  contractId: string;

  /**
   * 
   */
  @property({name: 'grower', required: true})
  grower: {
  
};

  /**
   * 
   */
  @property({name: 'shipper', required: true})
  shipper: {
  
};

  /**
   * 
   */
  @property({name: 'importer', required: true})
  importer: {
  
};

  /**
   * 
   */
  @property({name: 'arrivalDateTime', required: true})
  arrivalDateTime: Date;

  /**
   * 
   */
  @property({name: 'unitPrice', required: true})
  unitPrice: number;

  /**
   * 
   */
  @property({name: 'minTemperature', required: true})
  minTemperature: number;

  /**
   * 
   */
  @property({name: 'maxTemperature', required: true})
  maxTemperature: number;

  /**
   * 
   */
  @property({name: 'minPenaltyFactor', required: true})
  minPenaltyFactor: number;

  /**
   * 
   */
  @property({name: 'maxPenaltyFactor', required: true})
  maxPenaltyFactor: number;

  /**
   * 
   */
  @property({name: 'maxAccel', required: true})
  maxAccel: number;

}

