import express from 'express';
import userRoute from './user-routes';

const users = express();
users.use(userRoute);

export  default users;