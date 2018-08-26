*Read this in other languages: [日本語](README-ja.md).*

# IoT Asset Tracking using a Hyperledger Blockchain

## Introduction
This repository contains three sections which assemble an **IoT Asset Tracking device**, **Hyperledger Blockchain** and a **Node-RED Dashboard** to implement a perishable network supply chain.  This example can be used to track environmental conditions for a food safety supply chain, refrigerated medical supplies, garden plant shipments or any perishable shipment that are temperature / humidity / vibration / time sensitive.  If a cargo needs to be delivered within safe environmental parameters and time, the use of an IoT Asset Tracking device that combines environmental sensors, calculates its location via GPS, triangulation or beacons, and then reports its location via Cellular, 5G, Sub1GHz, SigFox, WiFi networks is extremely valuable. When multiple participants - farms, manufacturers, processing plants, trucks, ports, ships, distribution centers, consumer retail outlets - are involved in the safe shipment and payment of the cargo, a Hyperledger Blockchain can be used to record immutable transactions as the cargo shipment progresses through its delivery journey.

## Workshop
I've arranged this git repository to be read as an **[IBM Code Pattern](https://developer.ibm.com/code/)** [workshop tutorial](Workshop/README.md). Follow the steps in the [Workshop directory](Workshop/README.md) to learn how to build one yourself!

## Section Overviews
The first [section](ParticleElectron/README.md) details how to set up a **Particle Electron Asset Tracker v2** to send environmental sensor data and location to the cloud. This implementation uses a [Particle Electron](https://docs.particle.io/datasheets/kits-and-accessories/particle-shields/#electron-asset-tracker-v2) but many other IoT Asset Tracking devices that can transmit location and data can be substituted with similar results. Subsequent revisions of this workshop tutorial will add other IoT Asset Tracking boards so check back in the future.

The second [section](Blockchain/README.md) implements a **Perishable Business Network** using [Hyperledger](https://www.hyperledger.org/) Fabric, Hyperledger Composer, Hyperledger Composer REST APIs running in the [IBM Cloud Container Service](https://www.ibm.com/cloud/container-service) managed by a [Kubernetes cluster](https://console.bluemix.net/docs/tutorials/scalable-webapp-kubernetes.html#deploy-a-scalable-web-application-on-kubernetes) in the IBM Cloud.

In the third [section](Node-RED/README.md), the power of **Where, What and When** is best visualized in a dashboard that plots the geo location path, the environmental sensor data and can control triggers and alerts.  I use **[Node-RED](https://nodered.org/)** and a Node.js server running in an IBM Cloud hosted Cloud Foundry application to receive the IoT Asset Tracking data and write it to the Hyperledger Fabric using Hyperledger Composer REST APIs.  I also use a **Node-RED Dashboard** to plot the shipment on a map.

Enjoy!  Give me feedback if you have suggestions on how to improve this tutorial.
