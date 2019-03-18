/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Grower} from '../models/grower.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Grower
 * A participant named Grower
 */
export class GrowerController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Grower')
  async growerCreate(@requestBody() requestBody: Grower): Promise<Grower> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Grower')
  async growerFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Grower[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Grower/{id}')
  async growerExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
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
  @operation('get', '/Grower/{id}')
  async growerFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Grower> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Grower/{id}')
  async growerReplaceById(@requestBody() requestBody: Grower, @param({name: 'id', in: 'path'}) id: string): Promise<Grower> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Grower/{id}')
  async growerDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

