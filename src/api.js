import express from 'express';
import bodyParser from 'body-parser';
import controllers from './controllers.js';

const id = Math.random()

export async function build() {
    const app = express();

    app.use(bodyParser.json())

    app.get('/', (req, res) => {
        res.send({ id })
    })

    app.use("/api/v1", controllers);

    return app
}
