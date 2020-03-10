import 'dotenv/config';

import pgPool from './pg-pool';

const getClient =  () => {
    const client = pgPool.connect();
    return client;
};

const pgQuery = async (text, params) => {
    await getClient()
        .then(async (client) => {
            await client.query('BEGIN');
            await client.query(text, params);
            await client.query('COMMIT');
        })
        .finally(async ( client) => {
            client.remove();
        }).catch(async (error, client) => {
            await client.query('ROLLBACK');
            console.log(`database error: ${error}`)
        });
};

export default pgQuery;