import express from 'express';
import userRouter from './user-routes';

const controllers = express();

controllers.use(userRouter);


export  default controllers;