import 'dotenv/config';

import pgPool from './pg-pool';

const getClient = async () => {
    const client = await pgPool.connect();
    return client;
};

const pgQuery = async (text, params) => {
    let result;
    await getClient()
        .then(async (client) => {
            await (await client).query('BEGIN');
            result = await client.query(text, params);
            await client.query('COMMIT')
        })
        .finally(async (client) => {
            await client.release();
        }).catch(async (error, client) => {
            await client.query('ROLLBACK');
            console.log(`database error: ${error}`)
        });
};

const db = ({
    query: pgQuery,
});

export default db;