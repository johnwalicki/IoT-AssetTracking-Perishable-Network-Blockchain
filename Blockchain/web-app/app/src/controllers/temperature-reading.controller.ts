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
    let responseMessage: ResponseMessage = new ResponseMessage({ message: `added Temperature reading of ${temperatureReading.celsius} degrees Celcius to shipment [${temperatureReading.shipmentId}] on the Blockchain` });
    return responseMessage;
  } catch (error) {
    let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
    return responseMessage;
  }
}



 /**
   * 
   * 

   * @param id Model id
   * @returns ResponseMessage with readings or error message
   */
  @operation('get', '/TemperatureReading/{id}',{
    responses: {
      '200': {
        description: 'Response model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async TemperatureReadingFindById(@param({name: 'id', in: 'path'}) id: string): Promise<ResponseMessage> {
    try{
      let networkObj = await blockChainClient.connectToNetwork();
      let shipmentString = await blockChainClient.getShipmentByTransactionId(networkObj.contract, id);
      var shipmentJSON = JSON.parse(shipmentString);
      let repsonseMesssage: ResponseMessage = new ResponseMessage({message:`TemperatureReadings for shipment ${id}`, objectlist: shipmentJSON.temperatureReadings, statusCode:'200'});
      return repsonseMesssage;

    } catch(error){
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }

  }
}

