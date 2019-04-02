/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {AccelReading} from '../models/accel-reading.model';
import { ResponseMessage } from '../models/response-message.model';
import {BlockChainModule} from '../blockchainClient';

let blockChainClient = new BlockChainModule.BlockchainClient();


/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by AccelReading
 * A transaction named AccelReading
 */
export class AccelReadingController {
  constructor() {}

/**
   * POST AccelReading
   * @param requestBody Model instance data
   * @returns ResponseMessage - Request was successful or not
*/
@operation('post', '/AccelReading', {
  responses: {
    '200': {
      description: 'ResponseMessage model instance',
      content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
    },
  },
})
async accelReadingCreate(@requestBody() accelReading: AccelReading): Promise<ResponseMessage> {

  try {
    let networkObj = await blockChainClient.connectToNetwork();
    await blockChainClient.addAccelReading(networkObj.contract,accelReading);
    let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added AccelReading to Blockchain' });
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
  @operation('get', '/AccelReading/{id}',{
    responses: {
      '200': {
        description: 'Response model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
})
  async accelReadingFindById(@param({name: 'id', in: 'path'}) id: string): Promise<ResponseMessage> {
    try{
      let networkObj = await blockChainClient.connectToNetwork();
      let shipmentString = await blockChainClient.getShipmentByTransactionId(networkObj.contract, id);
      var shipmentJSON = JSON.parse(shipmentString);
      let repsonseMesssage: ResponseMessage = new ResponseMessage({message:`AccelReadings for shipment ${id}`, objectlist: shipmentJSON.AccelReadings, statusCode:'200'});
      return repsonseMesssage;

    } catch(error){
      let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
      return responseMessage;
    }
  }
}
