/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {AccelReading} from '../models/accel-reading.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by AccelReading
 * A transaction named AccelReading
 */
export class AccelReadingController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/AccelReading')
  async accelReadingCreate(@requestBody() requestBody: AccelReading): Promise<AccelReading> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/AccelReading')
  async accelReadingFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<AccelReading[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/AccelReading/{id}')
  async accelReadingFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<AccelReading> {
    throw new Error('Not implemented');
  }

}

