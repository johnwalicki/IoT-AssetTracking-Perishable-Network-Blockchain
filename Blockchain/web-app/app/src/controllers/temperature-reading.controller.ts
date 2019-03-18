/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {TemperatureReading} from '../models/temperature-reading.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by TemperatureReading
 * A transaction named TemperatureReading
 */
export class TemperatureReadingController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  @operation('post', '/TemperatureReading')
  async temperatureReadingCreate(@requestBody() requestBody: TemperatureReading): Promise<TemperatureReading> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/TemperatureReading')
  async temperatureReadingFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<TemperatureReading[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @param filter Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/TemperatureReading/{id}')
  async temperatureReadingFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<TemperatureReading> {
    throw new Error('Not implemented');
  }

}

