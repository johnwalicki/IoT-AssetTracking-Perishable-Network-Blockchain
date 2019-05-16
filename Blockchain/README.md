# IoT Asset Tracking on Hyperledger Fabric Blockchain



When the reader has completed this part 3 of this code pattern, they will understand how to:


* Build a blockchain network using Hyperledger Fabric v1.4
* Deploy the blockchain to a (free) Kubernetes Cluster on the IBM Cloud
* Build and Deploy a NodeJS LoopBack 4 client that communicates with  the blockchains smart contract

## Architecture Flow Diagram

![Architecture Flow Diagram](./docs/resources/app-architecture.png)



# Flow Description
1. ?tbd? The blockchain operator sets up the IBM Blockchain Platform 2.0 service.

2. ?tbd ?The IBM Blockchain Platform 2.0 

  OR User creates a Hyperledger Fabric network on an IBM Kubernetes 
  Service, [ and deploys by hand the docker stuff ] and the operator installs and instantiates the smart contract on the network.

3. The Node.js application server uses the Fabric SDK to interact with the deployed network on IBM Blockchain Platform 2.0 and creates APIs for a web client.

4. The Loopback 4 client uses the Node.js application API to interact with the network.

5. The user interacts with the Loopback 4 web interface to update and query the blockchain ledger and state.


## First  development locally!

```sh
git clone https://github.com/johnwalicki/IoT-AssetTracking-Perishable-Network-Blockchain.git
cd IoT-AssetTracking-Perishable-Network-Blockchain
cd Blockchain/IoTsmartContract/
code .
```

you will now be in the Smart Contract ( IoTsmartContract ) folder

click on square blockchain icon in left toolbar
this expands the IBM BLOCKCHAIN PLATFORM panel
in the top section
 SMART CONTRACT PACKAGES

 right click the ... and Package a Smart Contract Project

in the middle section
 LOCAL FABRIC OPS
 right click the ... and Start Fabric Runtime

 Installed/ +Install 
 install the newly packaged contract

 in the Instantiated/ +Instantiate 
 instantiate the new contract
 on 'mychannel' choose the init function
 and leave the args empty.

 now the local_fabric Blockchain is ready

 check?
 in a terminal window
 type:

 ```sh
 docker ps
 ```

 you should see 6 docker containers:

 1. gliderlabs/logspout
 1. hyperledger/fabric-orderer:1.4.0
 1. hyperledger/fabric-ca:1.4.0
 1. hyperledger/fabric-couchdb:0.4.14
 1. hyperledger/fabric-peer:1.4.0
 1. fabricvscodelocalfabric-peer0.org1.example.com-iotsmartcontract-0.0.1


### In order to interact with Blockchain, you will need to export the Connection Details ( aka the cerficicate details, user indentities and network IP addresses )

<< add nice screen shots here >>
in middle panel
LOCAL FABRIC OPS

open Nodes
right mouse click on peer0.org1.example.com
and `Export Connection Details` this process will export the peer's admin certificates to a folder called local_fabric

with the success message:
```text
Successfully exported connection details to /Users/<<your-username>>/Documents/dev/IoT-AssetTracking-Perishable-Network-Blockchain/Blockchain/local_fabric
```

this will export the Admin@org1.example.com public/private key pair so that the web-app client can communicate with this Network.

``` text
Blockchain
├── IoTsmartContract
├── README.md
├── local_fabric
└── web-app
```
Great, we are making good progress, hang in there!

### Enrolling an Admin and a User
### to the peer so that the web-app/app loopback client can communicate with the Blockchain network

```sh
cd ./web-app/server
npm install
node enrollAdmin.js
> msg: Successfully enrolled admin user and imported it into the wallet
node registerUser.js
> msg: Successfully registered and enrolled  user user1 and imported it into the wallet
```



under the server folder you should now see a new folder called `wallet` which contains
the public and private TLS keys needed by the web-app/app to communicate securely with our newly stood up Blockchain network.

```
server
├── config.json
├── enrollAdmin.js
├── registerUser.js
└── wallet
    ├── admin
    └── user1
```
### Run the loopback blockchain NodeJS client
So lets run the application.

```
cd web-app/app
```

install the node modules required for Fabric and Loopback
```
npm install
```
you should see a new folder containing all the nodeJS packages called ` node_modules`

At this time of writing I got a reply something like
`added 759 packages from 1533 contributors and audited 4558 packages in 32.26s` which is good!


### lets run the application
``` sh
npm start
> Server is running at http://127.0.0.1:3000
```

You should be able to view and try the API out by clicking here: [http://127.0.0.1:3000/explorer](http://127.0.0.1:3000/explorer)

You should 
be able to discover the REST api and exercise it directly from you webbrowser.

![LoopBack Application Explorer](./docs/resources/loopback-explorer-REST.jpg)



# Once you are satisfied with and have tested your local setup you are ready for - Remote Deployment to the IBM Cloud.

## Blockchain Network
<< IBPv2(beta!) / Kubernetes Cluster to IBM Cloud>>

## Loopback Fabric REST API client
<< cloud foundry>>

## resources
### IBM
https://developer.ibm.com/

https://developer.ibm.com/patterns/develop-an-iot-asset-tracking-app-using-blockchain/


### external
https://loopback.io/

## troubleshooting
<<to be filled in - gPRC error etc ...>>
https://github.com/grpc/grpc/issues/15431

### Credits
John Walicki
Jennifer Francis
Grant Steinfeld

