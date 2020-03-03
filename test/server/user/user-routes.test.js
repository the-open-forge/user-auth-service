import mocha from 'mocha/';
import sinon from 'sinon';
import {userRouter, helloTester} from '../../../server/user/user-routes'

const {describe: describe1, it: it1} = mocha;
const describe = describe1;
const it = it1;

// const chance = Chance();

describe('userRouter', () => {


    it('should return Hello Tester when called', () => {
        let req = {},
            res = {
                send: ()=>{}
            };

        const mockRes = sinon.mock(res);
        mockRes.expects('send').once().withExactArgs('Hello Tester');
         helloTester(req,res);
        mockRes.verify();
    });
});