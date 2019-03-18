/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {ShipmentReceived} from '../models/shipment-received.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by ShipmentReceived
 * A transaction named ShipmentReceived
 */
export class ShipmentReceivedController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/ShipmentReceived')
  async shipmentReceivedCreate(@requestBody() requestBody: ShipmentReceived): Promise<ShipmentReceived> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/ShipmentReceived')
  async shipmentReceivedFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<ShipmentReceived[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/ShipmentReceived/{id}')
  async shipmentReceivedFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<ShipmentReceived> {
    throw new Error('Not implemented');
  }

}

