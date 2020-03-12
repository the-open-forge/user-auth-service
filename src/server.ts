import express from 'express';
import http from 'http';

import { applyMiddleware,applyRoutes } from './utils/index';
import routes from './services';
import middleware from './middleware';

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const {INTERN_AUTH_API_PORT = 5000} = process.env;
const server = http.createServer(router);

server.listen(INTERN_AUTH_API_PORT, () => {
    console.log('ESM 6 running on node!');

});

export default server;
