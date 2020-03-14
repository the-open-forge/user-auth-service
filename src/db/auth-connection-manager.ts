import { Connection, createConnection } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const AuthConnection = async () => {
  const authConnection = await createConnection()

  authConnection.isConnected 
  ? authConnection 
  : new Error("Connection failed");
};

export default AuthConnection;
