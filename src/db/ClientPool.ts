import Pool from 'pg-pool';
import DbConfig from './db-config';

export const ClientPool = new Pool({
    user: DbConfig.pgUser,
    password: DbConfig.pgPassword,
    host: DbConfig.pgHost,
    port: Number(DbConfig.pgPort),
    database: DbConfig.pgDatabase,
});
