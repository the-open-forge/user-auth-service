import dotenv from "dotenv";

dotenv.config();

export const DataBaseConfig = {
    pgHost: process.env.TYPEORM_HOST,
    pgPort: Number(process.env.TYPEORM_PORT),
    pgUsername: process.env.TYPEORM_USERNAME,
    pgPassword: process.env.TYPEORM_PASSWORD,
    pgDatabase: process.env.TYPEORM_CONNECT
};
