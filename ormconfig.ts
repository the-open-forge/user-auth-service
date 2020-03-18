import {ConnectionOptions} from 'typeorm';

import DataBaseConfig from './src/config'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { PostgresConnectionCredentialsOptions } from 'typeorm/driver/postgres/PostgresConnectionCredentialsOptions';


const {
  pgHost,
  pgDatabase,
  pgPort,
  pgUsername,
  pgPassword } = DataBaseConfig;

const typeOrmConfig: ConnectionOptions = {
  type: "postgres",
  host: "auth-db",
  port: Number(pgPort),
  username: pgUsername,
  password: pgPassword,
  database: pgDatabase

  // entities: [__dirname + "/../**/*.entity{.ts, .js}"],
  // synchronize: true
};

export default typeOrmConfig;