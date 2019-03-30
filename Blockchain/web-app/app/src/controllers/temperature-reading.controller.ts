/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {TemperatureReading} from '../models/temperature-reading.model';
import { ResponseMessage } from '../models/response-message.model';
import {BlockChainModule} from '../blockchainClient';

let blockChainClient = new BlockChainModule.BlockchainClient();

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by TemperatureReading
 * A transaction named TemperatureReading
 */
export class TemperatureReadingController {
  constructor() {}

 /**
   * POST
   * @param requestBody Model instance data
   * @returns ResponseMessage - Request was successful or not
*/
@operation('post', '/TemperatureReading', {
  responses: {
    '200': {
      description: 'ResponseMessage model instance',
      content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
    },
  },
})
async temperatureReadingCreate(@requestBody() temperatureReading: TemperatureReading): Promise<ResponseMessage> {

  try {
    let networkObj = await blockChainClient.connectToNetwork();
    await blockChainClient.addTemperatureReading(networkObj.contract,temperatureReading);
    let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added TemperatureReading to Blockchain' });
    return responseMessage;
  } catch (error) {
    let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
    return responseMessage;
  }
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

