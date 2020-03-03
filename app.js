import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import users from './server/user';

const app = express();

app.use(cors());
app.use(users);

app.listen(process.env.PORT, () =>
    console.log('ESM 6 running on node!'),
);
export default app;
