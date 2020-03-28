import express from 'express';
import http from 'http';
import { v4 as uuidv4 } from 'uuid';
import { applyMiddleware, applyRoutes } from './utils';
import { middlewareArray, query } from './middleware';
import routes from './routes/';

const connectDbTemp = async () => {
    try {
        const result = await query(
            `
          CREATE TABLE IF NOT EXISTS items (
            id uuid,
            item_name TEXT NOT NUll,
            complete BOOLEAN DEFAULT false,
            PRIMARY KEY (id)
          )
        `, []);
    } catch (error) {
        console.log(`Error creating init table ${error}`);
    }
}

const app = express();

//common middleware
//ts conversion
applyMiddleware(middlewareArray, app);
applyRoutes(routes, app);

//everything below here with eventually go in controllers
app.get('/v1/items', async (req, res) => {
    const items = await query('SELECT * FROM items', []);
    // const { rows } = items;
    res.status(200).send(items);
});

app.get('/', async (req, res) => {
    res.send('Im not dead');
});

app.post('/v1/items', async (req, res) => {
    const { item_name } = req.body;
    const id = uuidv4();
    await query(
        `INSERT INTO items (id, item_name, complete) VALUES
    ($1, $2, $3)`, [id, item_name, false]
    )
        .catch((error: Error) => {
            console.log(`Error: ${error}`);
            res
                .status(500)
                .send(`Encountered an internal error when creating an item: ${error}`);
        });
    res
        .status(201)
        .send(`Item created with ID: ${id}`);
});

//entry point to api
const server = http.createServer(app);

connectDbTemp()
.then(() => {
    server.listen(5000, () => {
        console.log('ESM 6 running on node!');
    })
})
.catch((error: Error) => {
    console.log(`error at server start ${error}`);
    process.exit(-1);
});

export default app;
