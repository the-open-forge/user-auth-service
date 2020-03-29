import { PoolClient, QueryResult } from 'pg';

import ClientPool from '../../db'

interface IQuery<T> {
     query: (queryString: string, values: Array<T>) => IQuery<T> & T;
}

const query = async (
    {queryString = '', values = []} = {queryString: '', values: []},
)  => {
    let thisQueryString = queryString;
    let theseValues = values;
    let client = ClientPool.connect();
    let feedback;
    //Reference Mixins scratch pad
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