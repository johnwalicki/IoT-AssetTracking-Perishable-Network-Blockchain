/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';

import { ResponseMessage } from '../models/response-message.model';
import {BlockChainModule} from '../blockchainClient';

let blockChainClient = new BlockChainModule.BlockchainClient();


export class LedgerController {
  constructor() {}

  


  /**
   * 
   * 

   * @param filter Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @returns Request was successful
   */
  @operation('get', '/Ledger', {
    responses: {
      '200': {
        description: 'Response model instance',
        content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
      },
    },
})
async LedgerFindAll(): Promise<ResponseMessage> {
  let networkObj = await blockChainClient.connectToNetwork();

  let dataForQuery = {
    function:'queryAll',
    contract: networkObj.contract,
    network: networkObj.network
  };

  let result = await blockChainClient.queryAll(networkObj.contract);

  var rez = JSON.parse(result.toString());
  // console.log("-------------------------------");
  // console.log("-------------------------------");
  // console.log(rez);
  // console.log("-------------------------------");
  // console.log("-------------------------------");
  let repsonseMesssage: ResponseMessage = new ResponseMessage({message:"the blockchain entries", jl:JSON.parse(rez), statusCode:'200'});
  return repsonseMesssage;
   

}
  
//   @operation('get', '/Ledger/{id}', {
//     responses: {
//       '200': {
//         description: 'Response model instance',
//         content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
//       },
//     },
// })
//   async LedgerFindById(@param({name: 'id', in: 'path'}) id: string, @param({name: 'filter', in: 'query'}) filter: string): Promise<Ledger> {
//     let networkObj = await blockChainClient.connectToNetwork();

//     let dataForQuery = {
//       function:'query',
//       id: id,
//       contract: networkObj.contract,
//       network: networkObj.network
//     };

//     let result = await blockChainClient.queryByKey(dataForQuery);

//     var rez = JSON.parse(result.toString());

//     return rez;
     

//   }

 

}

