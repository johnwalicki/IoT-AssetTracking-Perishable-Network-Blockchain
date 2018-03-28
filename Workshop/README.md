# IoT Asset Tracking Perishable Network Blockchain Workshop
Author: [@johnwalicki](https://twitter.com/johnwalicki)

# Follow this workshop at **https://github.com/johnwalicki/IoT-AssetTracking-Perishable-Network-Blockchain**

I've arranged this git repository to be read as an **[IBM Code Pattern](https://developer.ibm.com/code/)** [workshop tutorial](README.md).

## Section Overviews
The first [section](../ParticleElectron/README.md) details how to set up a **Particle Electron Asset Tracker v2** to send environmental sensor data and location to the cloud. This implementation uses a [Particle Electron](https://docs.particle.io/datasheets/kits-and-accessories/particle-shields/#electron-asset-tracker-v2). Since we don't have dozens of Particle Electrons, I will demo mine from the podium.  By the end of the workshop you will be reading environmental data off this tracker.

The second [section](../Blockchain/README.md) implements a **Perishable Business Network** using [Hyperledger](https://www.hyperledger.org/) Fabric, Hyperledger Composer, Hyperledger Composer REST APIs running in the [IBM Cloud Container Service](https://www.ibm.com/cloud/container-service) managed by a [Kubernetes cluster](https://console.bluemix.net/docs/tutorials/scalable-webapp-kubernetes.html#deploy-a-scalable-web-application-on-kubernetes) in the IBM Cloud.

In the third [section](../Node-RED/README.md), the power of **Where, What and When** is best visualized in a dashboard that plots the geo location path, the environmental sensor data and can control triggers and alerts.  I use **[Node-RED](https://nodered.org/)** running in the IBM Cloud to receive the IoT Asset Tracking data and write it to the Hyperledger Fabric using Hyperledger Composer REST APIs.  I also use a **Node-RED Dashboard** to plot the shipment on a map.

* If you purchased your own Particle Electron, you will need to know the Particle Device ID and Access Token and insert it into Node-RED initialization flow.
* If your participating in a workshop, the instructor will share the Particle Device ID and Access Token in a separate slide (not part of GitHub)

At the end of the workshop, you will have a complete Hyperledger Blockchain with a food safety supply chain implemented and a Node-RED Map Dashboard that tracks the routes of my Particle.
