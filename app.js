import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import users from './server/user';
import bodyParser from 'body-parser';
import initPgClient from './db';
import {Client} from 'pg';
import http from 'http';

const {pgUser, pgHost, pgDatabase, pgPort, pgPassword} = initPgClient();

let connectionString = `${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`;
console.log(connectionString);

let pgClient = new Client({
    connectionString: connectionString
});


pgClient
    .connect()
    .catch(((err) => {
        console.log(` Failed to connect db: ${err}`);
        process.exit(1);
}));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(users);

app.get('/populate', async (req, res) => {
    await pgClient.query(
        `
  CREATE TABLE IF NOT EXISTS items (
    id uuid,
    item_name TEXT NOT NUll,
    complete BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
  )
`
    ).catch(err => {
        console.log(err);
        res
            .status(500)
            .send(`failed to execute query ${err}`);
    });
    res
        .status(201)
        .send("successfully ran query");
});

app.get('/v1/items', async (req, res) => {
    const items = await pgClient.query('SELECT * FROM items');
    const {rows} = items;
    res.status(200).send(rows);
});

app.post('/v1/items', async (req, res) => {
    const {item_name} = req.body;
    const id = uuid();
    const item = await pgClient
        .query(
            `INSERT INTO items (id, item_name, complete) VALUES 
    ($1, $2, $3)`,
            [id, item_name, false]
        )
        .catch(e => {
            res
                .status(500)
                .send('Encountered an internal error when creating an item');
        });
    res.status(201).send(`Item created with ID: ${id}`);
});

const server = http.createServer(app);
server.listen(process.env.INTERN_AUTH_API_PORT, () => {
    console.log(pgClient);

    console.log('ESM 6 running on node!');
});

export default app;
