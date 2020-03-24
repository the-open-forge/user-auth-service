import express from 'express';
import userRoute from '../controllers/user/user-routes';

const users = express();
users.use(userRoute);

export default users;