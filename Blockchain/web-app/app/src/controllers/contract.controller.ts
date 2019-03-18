/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Contract} from '../models/contract.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Contract
 * An asset named Contract
 */
export class ContractController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Contract')
  async contractCreate(@requestBody() requestBody: Contract): Promise<Contract> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Contract')
  async contractFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Contract[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Contract/{id}')
  async contractExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
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
  @operation('get', '/Contract/{id}')
  async contractFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Contract> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Contract/{id}')
  async contractReplaceById(@requestBody() requestBody: Contract, @param({name: 'id', in: 'path'}) id: string): Promise<Contract> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Contract/{id}')
  async contractDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

