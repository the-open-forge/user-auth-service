import {Router} from 'express';

let userRouter = Router();

export const helloTester = (req, res) => {
   res.send('Hello Tester');
};

userRouter.get('/', helloTester);


export {
   userRouter,
};