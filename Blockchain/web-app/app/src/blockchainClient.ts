import { Shipment } from "./models/shipment.model";

const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');

const path = require('path');

const configPath = path.join(process.cwd(), './../server/config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);
var userName = config.userName;
var gatewayDiscovery = config.gatewayDiscovery;
var connection_file = config.connection_file;


// connect to the connection file
const ccpPath = path.join(process.cwd(), './../server/' + connection_file);
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('./../server/wallet');

export module BlockChainModule {

  export class BlockchainClient {
    async connectToNetwork() {


      const gateway = new Gateway();

      try {

        await gateway.connect(ccp, { wallet, identity: userName, discovery: gatewayDiscovery });

        // Connect to our local fabric
        const network = await gateway.getNetwork('mychannel');
  

        console.log('Connected to mychannel. ');

        // Get the contract we have installed on the peer
        const contract = await network.getContract('IoTsmartContract');


        let networkObj = {
          contract: contract,
          network: network
        };

        return networkObj;

      } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
      } finally {
        console.log('Done connecting to network.');
        // gateway.disconnect();
      }

    }



    async addShipper(args: any) {
      //call addShipper smart contract function
      let response = await args.contract.submitTransaction(args.function,
        args.email, args.address, args.accountBalance);
      return response;


    }


    async addShipment(contract: any, shipment: Shipment ) {
      //call addShipment function on smart contract
      
      let jsonShipment = JSON.stringify(shipment);

      let response = await contract.submitTransaction('addShipment',
      jsonShipment);
      return response;
    }



    async queryByKey2(contract: any, keyPassed: any) {

      // let str = 'query'
      // let response = await keyPassed.contract.submitTransaction('query', 'arg1', 'arg2');

      let response = await contract.submitTransaction('query', keyPassed);
      console.log('query by key response: ')
      console.log(JSON.parse(response.toString()))
      console.log(response.length)
      if (response.length === 2) {
        response = `${keyPassed} does not exist`;
        return response;
      }
      response = JSON.parse(response.toString());
      return response;

    }

    async queryAll(contract: any) {
      let response = await contract.evaluateTransaction('queryAll');
      //console.log(response.toString())
      return response;
    }

    async queryByKey(keyPassed: any) {

      // let str = 'query'
      // let response = await keyPassed.contract.submitTransaction('query', 'arg1', 'arg2');

      let response = await keyPassed.contract.submitTransaction('query', keyPassed.id);
      console.log('query by key response: ')
      console.log(JSON.parse(response.toString()))
      console.log(response.length)
      if (response.length === 2) {
        response = `${keyPassed.id} does not exist`;
        return response;
      }
      response = JSON.parse(response.toString());
      return response;

    }




  }
}