/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {SetupDemo} from '../models/setup-demo.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by SetupDemo
 * A transaction named SetupDemo
 */
export class SetupDemoController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/SetupDemo')
  async setupDemoCreate(@requestBody() requestBody: SetupDemo): Promise<SetupDemo> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/SetupDemo')
  async setupDemoFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<SetupDemo[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/SetupDemo/{id}')
  async setupDemoFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<SetupDemo> {
    throw new Error('Not implemented');
  }

}

