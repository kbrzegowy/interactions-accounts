import express from 'express';
import dotenv from 'dotenv';
import { RoutersManager } from './routers/manager.router';
import { ControllersFacotry } from './server/ControllersFactory';
import { ROOT } from './routers/routeConstatns';
import { ServicesFactory } from './server/ServicesFactory';
// import { PostgreSQL, postgreSQLConfiguration } from './server/DatabaseFactory';

dotenv.config();

// const postgreSQL = new PostgreSQL(postgreSQLConfiguration as any);
// postgreSQL.connect()

const servicesFactory: ServicesFactory = new ServicesFactory();
const controllersFacotry: ControllersFacotry = new ControllersFacotry(
  servicesFactory,
);
const routersManager = new RoutersManager(controllersFacotry);

const server = express();

server.use(ROOT, routersManager.router);

server.listen(process.env.PORT, () =>
  console.log(`Server is working on port ${process.env.PORT}...`),
);
