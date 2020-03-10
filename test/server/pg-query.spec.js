import mocha from 'mocha/';
import sinon from 'sinon';
import Chance from 'chance';
import chai from "chai";
import chaiAsPromised from 'chai-as-promised';


import pgPool from '../../db/pg-pool';
import pgQuery  from  '../../db/pg-query';
const chance = new Chance();
chai.use(chaiAsPromised);

const expect = chai.expect;
describe('when pgPool connects successfully', () => {
       let expectedClient,
           expectedQuery,
           expectedParams;

       beforeEach(() => {
          expectedQuery = chance.name();
          [expectedParams] = chance.n(() =>
              chance.string(), chance.natural({min: 1, max: 10}));
          expectedClient = {
              query: ()=>{},
              then: () =>{}
           };
       });

       describe('when query is successful', async () => {
        it('should return a response', async (done) => {

        });
       });
   });
