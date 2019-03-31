import { Shipment } from "./models/shipment.model";
import { Shipper } from "./models/shipper.model";
import { Contract } from "./models/contract.model";
import { Importer } from "./models/importer.model";
import { TemperatureReading } from "./models/temperature-reading.model";
import { AccelReading } from "./models/accel-reading.model";
import { Grower } from "./models/grower.model";

const yaml = require('js-yaml');
const uuid  = require('uuid');
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
    //get all blocks needs work
    async getAllBlocks(networkObj: any){
      let response = await networkObj.network.evaluateTransaction('queryAllBlocks');
      return response;
    }

    async queryByKey2(contract: any, keyPassed: any) {

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




    //user defined functions

    async addShipment(contract: any, shipment: Shipment ) {

      if(shipment.shipmentId === 'undefined' || shipment.shipmentId === null || shipment.shipmentId === ""){
        shipment.shipmentId = uuid.v4(); 
      }
      let transactionID = shipment.shipmentId;
      console.log(`about to addShipment with transactionId of ${transactionID}`);
      let result = await contract.submitTransaction('addShipment', transactionID, JSON.stringify(shipment));
      return `shipment with transactionId: ${transactionID} added with return code ${result}`;
    }
    /*
    lookup shipment by transactionID
    **/
    async getShipmentByTransactionId(contract: any, transactionID: string){
      let shipment =  await contract.submitTransaction('query', transactionID);
      
      console.log(JSON.parse(shipment.toString()))
      console.log(shipment.length)
      if (shipment.length === 2) {
        throw `Shipment by transactionId ${transactionID} not found`;
      }
      shipment = JSON.parse(shipment.toString());
      return shipment;
    }



    async addAccelReading(contract: any, accelReading: AccelReading ) {
      let transactionId: string = accelReading.transactionId;
      console.log(`about to add new accelerometer reading to shipment by transactionId ${transactionId}`);
      var shipment = await this.getShipmentByTransactionId(contract,transactionId);
      shipment = JSON.parse(shipment);
      shipment.AccelReadings.push(accelReading);
      return await contract.submitTransaction('updateShipment', transactionId, JSON.stringify(shipment));
    }

    async addTemperatureReading(contract: any, temperatureReading: TemperatureReading ) {
      let transactionId: string = temperatureReading.transactionId;
      console.log(`about to add new temperature reading to shipment by transactionId ${transactionId}`);
      var shipment = await this.getShipmentByTransactionId(contract,transactionId);
      shipment = JSON.parse(shipment);
      shipment.temperatureReadings.push(temperatureReading);
      return await contract.submitTransaction('updateShipment', transactionId, JSON.stringify(shipment));
    }

    async addGrower(contract: any, grower: Grower ) {
      return await contract.submitTransaction('addGrower', grower.email, JSON.stringify(grower));
    }

    async addImporter(contract: any, importer: Importer ) {
      return await contract.submitTransaction('addImporter', importer.email, JSON.stringify(importer));
    }

    async addContract(contract: any, _contract: Contract ) {
      return await contract.submitTransaction('addContract', _contract.contractId, JSON.stringify(_contract));
    }

    async addShipper(contract: any, shipper: Shipper ) {
      return await contract.submitTransaction('addShipper', shipper.email, JSON.stringify(shipper));
    }


  }
}