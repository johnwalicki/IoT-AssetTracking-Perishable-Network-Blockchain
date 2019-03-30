/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Shipper} from '../models/shipper.model';
import {Address} from '../models/address.model';
import {ResponseMessage} from '../models/response-message.model';
import {BlockChainModule} from '../blockchainClient';

let blockChainClient = new BlockChainModule.BlockchainClient();

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by Shipper
 * A participant named Shipper
 */
export class ShipperController {
  constructor() {}

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @returns Request was successful
   */
  // @operation('post', '/Shipper')
  // async shipperCreate(@requestBody() requestBody: Shipper): Promise<Shipper> {
  //   throw new Error('Not implemented');
  // }
  @operation('post', '/Shipper', {
    responses: {
      '200': {
        description: 'ResponseMessage model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
  })
  async shipperCreate(@requestBody() requestBody: Shipper): Promise<ResponseMessage> {

    try {
      //so blockChainClient is not transpiling so we must now first create a basic network to connect to!
      //and export the connection

      let networkObj = await blockChainClient.connectToNetwork();
      let dataForAddMember = {
        function: 'addShipper',
        email: requestBody.email,
        address: `${requestBody.address.street} ${requestBody.address.city} ${requestBody.address.zip} ${requestBody.address.country}`,
        accountBalance: `${requestBody.accountBalance}`,
        contract: networkObj.contract
      };

      await blockChainClient.addShipper(dataForAddMember);

      let responseMessage: ResponseMessage = new ResponseMessage({ message: 'added Shipper to Blockchain' });
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
  @operation('get', '/Shipper')
  async shipperFind(@param({name: 'filter', in: 'query'}) filter: string): Promise<Shipper[]> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('head', '/Shipper/{id}')
  async shipperExists(@param({name: 'id', in: 'path'}) id: string): Promise<{
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
  @operation('get', '/Shipper/{id}', {
    responses: {
      '200': {
        description: 'Shipper model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Shipper } } },
      },
    },
})
  async shipperFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Shipper> {
    let networkObj = await blockChainClient.connectToNetwork();

    let dataForQuery = {
      function:'query',
      id: id,
      contract: networkObj.contract,
      network: networkObj.network
    };

    let result = await blockChainClient.queryByKey(dataForQuery);
    console.log(result);
    if (result.id) {
      var rez = JSON.parse(result.toString());
      console.log(rez)
      let address = new Address({ city: rez.address, country: rez.address, street: rez.address });
      let shipper = new Shipper({ email: rez.id,  address: rez.address, accountBalance: rez.accountBalance });
      return shipper;
    }
return result;

  }

  /**
   * 
   * 

   * @param requestBody Model instance data
   * @param id Model id
   * @returns Request was successful
   */
  @operation('put', '/Shipper/{id}')
  async shipperReplaceById(@requestBody() requestBody: Shipper, @param({name: 'id', in: 'path'}) id: string): Promise<Shipper> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id Model id
   * @returns Request was successful
   */
  @operation('delete', '/Shipper/{id}')
  async shipperDeleteById(@param({name: 'id', in: 'path'}) id: string): Promise<{
  
}> {
    throw new Error('Not implemented');
  }

}

