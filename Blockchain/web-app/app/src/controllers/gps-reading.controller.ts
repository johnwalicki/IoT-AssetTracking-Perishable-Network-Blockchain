/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {GpsReading} from '../models/gps-reading.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by GpsReading
 * A transaction named GpsReading
 */
export class GpsReadingController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/GpsReading')
  async gpsReadingCreate(@requestBody() requestBody: GpsReading): Promise<GpsReading> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/GpsReading')
  async gpsReadingFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<GpsReading[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/GpsReading/{id}')
  async gpsReadingFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<GpsReading> {
    throw new Error('Not implemented');
  }

}

