import { Connection, createConnection, getConnectionOptions, ConnectionOptions } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { PostgresConnectionCredentialsOptions } from "typeorm/driver/postgres/PostgresConnectionCredentialsOptions";

// import typeOrmConfig from '../../ormconfig'
import DataBaseConfig from '../config/index';
import { connect } from "http2";

export const AuthConnection = async () => {
  try {
    console.log('Config:', DataBaseConfig);
   return await createConnection(DataBaseConfig)
  //  return await createConnection(DataBaseConfig)
    .then((connection: Connection) => connection)
    .catch((err: Error) => console.log(`Error ${err}`));
  } catch (err) {
    console.log(`error connecting at lower level: ${err}`);
  }
};
