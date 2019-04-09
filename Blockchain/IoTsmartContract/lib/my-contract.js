'use strict';

const { Contract } = require('fabric-contract-api');

class IoTperishibleContract extends Contract {

    async instantiate(ctx) {
        console.info('instantiate');
    }
    async init(ctx) {
      console.info('init');
    }

    async addShipment(ctx, shipmentId, serializedShipment) {
      return await ctx.stub.putState(shipmentId, Buffer.from(serializedShipment));
  }

  async updateShipment(ctx, shipmentId, serializedShipment) {
    return await ctx.stub.putState(shipmentId, Buffer.from(serializedShipment));
}

  

    //helper contract functions to read blockchain
    async query(ctx, key) {
        console.info(`query by key ${key}`);
        let returnAsBytes = await ctx.stub.getState(key);
        if (!returnAsBytes || returnAsBytes.length === 0) {
          const errMsg = `${key} does not exist`;
          console.error(errMsg)
          return new Error(errMsg);
        }
        let result = JSON.parse(returnAsBytes);
        return JSON.stringify(result);
      }
    
      async queryAll(ctx) {
        let queryString = {
          "selector": {}
        }
    
        let queryResults = await this.queryWithQueryString(ctx, JSON.stringify(queryString));
        return queryResults;
      }

      async queryWithQueryString(ctx, queryString) {
    
        console.log("Query with String vv");
        console.log(JSON.stringify(queryString));
    
        let resultsIterator = await ctx.stub.getQueryResult(queryString);
        let allResults = [];
    
        while (true) {
          let res = await resultsIterator.next();
    
          if (res.value && res.value.value.toString()) {
            let jsonRes = {};
    
            //console.log(res.value.value.toString('utf8'));
    
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

module.exports = IoTperishibleContract;
