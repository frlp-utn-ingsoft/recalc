import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ ok: true })
})

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`)
})