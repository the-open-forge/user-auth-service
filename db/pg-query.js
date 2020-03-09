import 'dotenv/config';
import DbConfig from '../server/config/db-config';
import {Pool} from 'pg';

const {pgUser, pgHost, pgDatabase, pgPort, pgPassword} = DbConfig;
let connectionString = `${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`;

const {connect, end} = new Pool({
    connectionString: connectionString
});

export const pgQuery = async (text, params) => {
    let response;

    const client = await connect()
        .catch((err) => console.log(`failed to connect ${err}`));
    try {
        await client.query('BEGIN');
        try {
            response = await client.query(text, params);
            await client.query('COMMIT');
        } catch (e) {
            await client.query('ROLLBACK');
            throw e;
        }
    } finally {
        await client.release();
    }
    await end();

    return response;
};

export default pgQuery;
