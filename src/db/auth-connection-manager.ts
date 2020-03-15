import { Connection, createConnection, getConnectionOptions } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { PostgresConnectionCredentialsOptions } from "typeorm/driver/postgres/PostgresConnectionCredentialsOptions";

export const AuthConnection = async () => {
  try {
    const connectOptions = await getConnectionOptions();
    await createConnection(connectOptions);
  } catch (e) {
    console.log(`error connecting at lower level: ${e}`);
  }
};
