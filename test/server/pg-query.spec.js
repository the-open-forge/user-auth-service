import mocha from 'mocha/';
import sinon from 'sinon';
import Chance from 'chance';
import {expect} from 'chai';

import pgPool from '../../db/pg-pool';
import db  from  '../../db/pg-query';
const chance = new Chance();

describe('when pgPool connects successfully', () => {
       let expectedClient,
           expectedQuery,
           expectedParams;

       beforeEach(() => {
          expectedQuery = chance.name();
          [expectedParams] = chance.n(() =>
              chance.string(), chance.natural({min: 1, max: 10}));
          expectedClient = {
              query: ()=>{}
           };
       });

       describe('when query is successful', async () => {
        it('should return a response', async () => {
            const mockClient = sinon.mock(expectedClient);
           sinon.stub(pgPool, 'connect').resolves(expectedClient);

            const actualResponse = await db.query(expectedQuery, expectedParams);
           expect(actualResponse).to.not.null;
           console.log(actualResponse);
        });
       });
   });
