import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (rew,res) => {
   res.send('Hello Express');
});

app.listen(process.env.PORT, () =>
    console.log('ESM 6 running on node!'),
);
export default app;
