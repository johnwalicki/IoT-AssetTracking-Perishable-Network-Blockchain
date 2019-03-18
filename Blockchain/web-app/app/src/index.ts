import {IoTclient} from './application';
import {ApplicationConfig} from '@loopback/core';

export {IoTclient};

export async function main(options: ApplicationConfig = {}) {
  const app = new IoTclient(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
