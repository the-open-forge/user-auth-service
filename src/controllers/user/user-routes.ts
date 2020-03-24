import {Router, Request, Response} from 'express';

let userRouter = Router();

export const helloTester = (req:Request, res:Response) => {
    res.send('Hello Tester');
};

userRouter.get('/', helloTester);

export default userRouter;

