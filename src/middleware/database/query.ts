import { PoolClient, QueryResult } from 'pg';

import ClientPool from '../../db'

let client;
const query = async (queryString: string, values: Array<any>) => {
    client = ClientPool.connect();
    let feedback;

    const result: Promise<QueryResult<any>> =
        client.then((t) => {
            t.query('BEGIN', () => console.log('did not even start begin'));
            feedback = t.query(queryString, values);
            t.query('COMMIT', () => {
                console.log((error: Error) => {
                    console.log(`Error with query ${queryString}`);
                     t.query('ROLLBACK');
                });
            });
            t.release();
            return feedback;
        }).catch((error:Promise<QueryResult<any>>)=> new Promise<any>(() => `well fuck`));

    return result;
};

export default query;