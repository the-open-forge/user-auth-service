import dotenv from "dotenv";

dotenv.config();

export const DataBaseConfig = {
  pgHost: process.env.PGHOST,
  pgPort: Number(process.env.PGPORT),
  pgUsername: process.env.PGUSER,
  pgPassword: process.env.PGPASSWORD,
  pgDatabase: process.env.PGDATABASE
};
