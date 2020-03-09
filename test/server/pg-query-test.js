import mocha from 'mocha/';
import sinon from 'sinon';
import Chance from 'chance';
import {expect} from 'chai';

import pgQuery from '../../db/pg-query';

const chance = new Chance;

describe('pg-query', () => {
   describe('when pgPool connects successfully', () => {
       let expectedQuery,
           expectedParams;

       beforeEach(() => {
          expectedQuery = chance.name();
          [expectedParams] = chance.n(() =>
              chance.string(), chance.natural({min: 1, max: 10}));
       });

       describe('when query is successful', async () => {
        it('should return a response', () => {
           const actualResponse = pgQuery(expectedQuery, expectedParams);
           expect(actualResponse).to.not.null;
           console.log(actualResponse);
        });
       });
   });
});
