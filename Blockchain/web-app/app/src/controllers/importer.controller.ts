/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Importer} from '../models/importer.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Importer
 * A participant named Importer
 */
export class ImporterController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/Importer')
  async importerCreate(@requestBody() requestBody: Importer): Promise<Importer> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Importer')
  async importerFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Importer[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Importer/{id}')
  async importerExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
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
  @operation('get', '/Importer/{id}')
  async importerFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Importer> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Importer/{id}')
  async importerReplaceById(@requestBody() requestBody: Importer, @param({name: 'id', in: 'path'}) id: string): Promise<Importer> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Importer/{id}')
  async importerDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

