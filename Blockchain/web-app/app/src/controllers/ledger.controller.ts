/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';

import { ResponseMessage } from '../models/response-message.model';
import {BlockChainModule} from '../blockchainClient';

let blockChainClient = new BlockChainModule.BlockchainClient();


export class LedgerController {
  constructor() {}

  



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
  let result = await blockChainClient.queryAll(networkObj.contract);
  var rez = JSON.parse(result.toString());
  let repsonseMesssage: ResponseMessage = new ResponseMessage({message:"the blockchain entries", objectlist:JSON.parse(rez), statusCode:'200'});
  return repsonseMesssage;

}
  
/*
get all blocks from the ledger
**/
@operation('get', '/Ledger/blocks', {
  responses: {
    '200': {
      description: 'Response model instance',
      content: { 'application/json': { schema: { 'x-ts-type': ResponseMessage } } },
    },
  },
})
async ledgerBlocks(): Promise<ResponseMessage> {

let networkObj = await blockChainClient.connectToNetwork();
let result = await blockChainClient.getAllBlocks(networkObj);
var rez = JSON.parse(result.toString());
let repsonseMesssage: ResponseMessage = new ResponseMessage({message:"the blockchain blocks", objectlist:JSON.parse(rez), statusCode:'200'});
return repsonseMesssage;

}

 

}

