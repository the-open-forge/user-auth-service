import { Connection, createConnection, getConnectionOptions, ConnectionOptions } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { PostgresConnectionCredentialsOptions } from "typeorm/driver/postgres/PostgresConnectionCredentialsOptions";

import typeOrmConfig from '../../ormconfig'

export const AuthConnection = async () => {
  try {
    console.log('typeOrmConfig:', typeOrmConfig);
    return await createConnection(typeOrmConfig)
    // .then((connection: Connection) => connection)
  } catch (e) {
    console.log(`error connecting at lower level: ${e}`);
  }
};
