import {ConnectionOptions} from 'typeorm';

import DataBaseConfig from './src/config'

const {
  pgHost,
  pgDatabase,
  pgPort,
  pgUsername,
  pgPassword } = DataBaseConfig;

const config: ConnectionOptions = {
  type: 'postgres',
  host: pgHost,
  port: Number(pgPort),
  username: pgUsername,
  password: pgPassword,
  database: pgDatabase,
  entities: [
    __dirname + '/../**/*.entity{.ts, .js}',
  ],
  synchronize: true,
};

export default config;