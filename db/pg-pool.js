import DbConfig from './config/db-config';
import {Pool} from 'pg';

const {pgUser, pgHost, pgDatabase, pgPort, pgPassword} = DbConfig;
let connectionString = `${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`;

const pgPool = new Pool({
    connectionString: connectionString
});

export default pgPool;