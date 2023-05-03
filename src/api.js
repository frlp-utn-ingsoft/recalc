import express from 'express.js';
import bodyParser from 'body-parser';
import controllers from './controllers.js';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json())

app.get("/mul/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Uno de los parámetros no es un número');
    } else {
        const result = core.mul(a, b);
        return res.send({ result });
    }
});

app.get('/', (req, res) => {
    res.send({ ok: true })
})

app.use("/api/v1", controllers);

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`)
})