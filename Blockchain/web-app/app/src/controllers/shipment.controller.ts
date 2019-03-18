/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Shipment} from '../models/shipment.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Shipment
 * An asset named Shipment
 */
export class ShipmentController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Shipment')
  async shipmentCreate(@requestBody() requestBody: Shipment): Promise<Shipment> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Shipment')
  async shipmentFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Shipment[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Shipment/{id}')
  async shipmentExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
  exists?: boolean;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Shipment/{id}')
  async shipmentFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Shipment> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Shipment/{id}')
  async shipmentReplaceById(@requestBody() requestBody: Shipment, @param({name: 'id', in: 'path'}) id: string): Promise<Shipment> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Shipment/{id}')
  async shipmentDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

