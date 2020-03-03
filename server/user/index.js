import express from 'express';
import {userRouter} from './user-routes';

const users = express();

users.use(userRouter);


export  default users;