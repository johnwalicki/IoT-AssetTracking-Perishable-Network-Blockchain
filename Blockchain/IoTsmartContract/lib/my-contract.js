/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');
var uuid  = require('uuid');
class MyContract extends Contract {

    async instantiate(ctx) {
        console.info('instantiate');
    }

    async addShipper(ctx, email, address, accountBalance) {
        console.info('adding shipper ', email);
        //create object to hold details of our new shipper
        let newShipper = {};
        newShipper.id = email;  //we will use email to key the shipper in this case
        newShipper.address = address;
        newShipper.accountBalance = accountBalance;

        await ctx.stub.putState(email, Buffer.from(JSON.stringify(newShipper)));
        console.info('updated ledger with new shipper : ' + email);

        return newShipper;
    }

    /*
    @return transaction id seeded
    for the new shipment
    **/
    async addShipment(ctx, serializedShipment) {
      let transactionId = uuid.v4(); 
      await ctx.stub.putState(transactionId, Buffer.from(serializedShipment));
      return transactionId;
  }

  async addGrower(ctx, email, serialiazedGrower) {
    return await ctx.stub.putState(email, Buffer.from(serialiazedGrower));
  }
  
  async addImporter(ctx, email, serialiazedImporter) {
    return await ctx.stub.putState(email, Buffer.from(serialiazedImporter));
  }

  async addContract(ctx, contractId, serialiazedContract) {
    return await ctx.stub.putState(contractId, Buffer.from(serialiazedContract));
  }

    //helper contract functions to read blockchain
    async query(ctx, key) {
        console.info('query by key ' + key);
        let returnAsBytes = await ctx.stub.getState(key);
        console.info(returnAsBytes)
        if (!returnAsBytes || returnAsBytes.length === 0) {
          return new Error(`${key} does not exist`);
        }
        let result = JSON.parse(returnAsBytes);
        console.info('result of getState: ');
        console.info(result);
        return JSON.stringify(result);
      }
    
      async queryAll(ctx) {
    
        let queryString = {
          "selector": {}
        }
    
        let queryResults = await this.queryWithQueryString(ctx, JSON.stringify(queryString));
        return queryResults;
    
      }
    

      async queryAllBlocks(ctx, start, end) {

          let result = await this.queryBlock(start);
          return result;
       

      }

      async queryWithQueryString(ctx, queryString) {
    
        console.log("query String");
        console.log(JSON.stringify(queryString));
    
        let resultsIterator = await ctx.stub.getQueryResult(queryString);
    
        let allResults = [];
    
        while (true) {
          let res = await resultsIterator.next();
    
          if (res.value && res.value.value.toString()) {
            let jsonRes = {};
    
            console.log(res.value.value.toString('utf8'));
    
            jsonRes.Key = res.value.key;
    
            try {
              jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
            } catch (err) {
              console.log(err);
              jsonRes.Record = res.value.value.toString('utf8');
            }
    
            allResults.push(jsonRes);
          }
          if (res.done) {
            console.log('end of data');
            await resultsIterator.close();
            console.info(allResults);
            console.log(JSON.stringify(allResults));
            return JSON.stringify(allResults);
          }
        }
    }
}

module.exports = MyContract;
