import { Connection, createConnection, getConnectionOptions} from "typeorm";

export const AuthConnection = async () => {
  const connectOptions = await getConnectionOptions();
  const authConnection = await createConnection()
  .then((connection: Connection) => connection)
  .catch((error: Error) => console.log(`connection to db failed ${error}`));

 return authConnection || new Error("Connection failed");
};
