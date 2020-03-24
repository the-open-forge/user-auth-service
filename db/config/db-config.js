import 'dotenv/config';

const DbConfig = {
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPort: process.env.PGPORT,
    pgPassword: process.env.PGPASSWORD,
};

export default DbConfig;