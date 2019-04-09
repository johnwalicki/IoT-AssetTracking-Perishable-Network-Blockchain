/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {SetupShipment} from '../models/setup-shipment.model';

import {ResponseMessage} from '../models/response-message.model';
import {SetupShipmentModule} from '../setupDemo';
let setupShipmentObject = new SetupShipmentModule.SetupShipmentClass();

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by SetupDemo
 * A transaction named SetupDemo
 */
export class SetupDemoController {
  constructor() {}

/**
   * POST
   * @param requestBody Model instance data
   * @returns ResponseMessage - Request was successful or not
*/
@operation('post', '/SetupDemo', {
  responses: {
    '200': {
      description: 'ResponseMessage model instance',
      content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
    },
  },
})
async setupDemo(@requestBody() setupShipmentBody: SetupShipment): Promise<ResponseMessage> {

  try {

    let message = await setupShipmentObject.setupDemo(setupShipmentBody);
    let responseMessage: ResponseMessage = new ResponseMessage({ message: message });
    return responseMessage;
  } catch (error) {
    let responseMessage: ResponseMessage = new ResponseMessage({ message: error, statusCode: '400' });
    return responseMessage;
  }
}

}

