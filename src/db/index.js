import 'dotenv/config';
import DbConfig from '../server/config/db-config';
import {Client} from 'pg';

const initPgClient = () => ({
        pgUser: process.env.PGUSER,
        pgHost: process.env.PGHOST,
        pgDatabase: process.env.PGDATABASE,
        pgPort: process.env.PGPORT,
        pgPassword: process.env.PGPASSWORD,
});

export default initPgClient;
