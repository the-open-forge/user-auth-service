import express from "express";
import http from "http";

import { applyMiddleware, applyRoutes } from "./utils";
import routes from "./services";
import middleware from "./middleware";
import { AuthConnection } from "./db/auth-connection-manager";

let connection = AuthConnection().catch((err: Error) => console.log(`error at run: ${err}, message: ${err.message}, ${err.stack}`));

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const { INTERN_AUTH_API_PORT = 5000 } = process.env;
const server = http.createServer(router);
connection
  .then(() => server.listen(INTERN_AUTH_API_PORT))
  .catch(() => console.log("failed to start app"));

export default server;
