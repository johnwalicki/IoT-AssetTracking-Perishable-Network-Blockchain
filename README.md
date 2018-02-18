# IoT Asset Tracking using a Hyperledger Blockchain

## Introduction
This repository contains three sections which assemble an **IoT Asset Tracking device**, **Hyperledger Blockchain** and a **Node-RED Dashboard** to implement a perishable network supply chain.  This example can be used to track environmental conditions for a food safety supply chain, refrigerated medical supplies, garden plant shipments or any perishable shipment that are temperature / humidity / vibration / time sensitive.  If a cargo needs to be delivered within safe environmental parameters and time, the use of an IoT Asset Tracking device that combines environmental sensors and reports its location via Cellular, GPS, 5G, Sub1GHz, SigFox, WiFi networks is extremely valuable. When multiple participants - farms, manufacturers, processing plants, trucks, ports, ships, distribution centers, consumer retail outlets - are involved in the safe shipment and payment of the cargo, a Hyperledger Blockchain can be used to record immutable transactions as the shipment progresses through its delivery journey.

## Workshop
I've arranged this git repository to be read as an **IBM Code Pattern** [workshop tutorial](Workshop/README.md). Follow the steps in the [Workshop directory](Workshop/README.md) to learn how to build one yourself!

## Section Overviews
The first [section](ParticleElectron/README.md) details how to set up a **Particle Electron Asset Tracker v2** to send environmental sensor data and location to the cloud. This implementation uses a Particle Electron but many other IoT Asset Tracking devices that can transmit location can be substituted with similar results. Subsequent revisions of this workshop tutorial will add other IoT Asset Tracking boards so check back in the future.

The second [section](Blockchain/README.md) implements a **Perishable Business Network** using Hyperledger Fabric, Hyperledger Composer, Hyperledger Composer REST APIs running in the IBM Container Service managed by a Kubernetes cluster in the IBM Cloud.

In the third section, the power of **Where, What and When** is best visualized in a dashboard that plots the geo location path, the environmental sensor data and triggers alerts.  I use **Node-RED** running in the IBM Cloud to receive the IoT Asset Tracking data and write it to the Hyperledger Fabric using Hyperledger Composer REST APIs.  I also use a **Node-RED Dashboard** to plot the shipment.

Enjoy!  Give me feedback if you have suggestions on how to improve this tutorial.
