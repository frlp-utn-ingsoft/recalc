import express from 'express';
import core from './core.js';

import { createHistoryEntry } from './models.js'

const router = express.Router();

router.get("/sub/:a/:b", async function(req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Uno de los parámetros no es un número');
    } else {
        const result = core.sub(a, b);

        await createHistoryEntry({ firstArg: a, secondArg: b, operationName: "SUB" })
        return res.send({ result });
    }
});


router.get("/div/:a/:b", async function(req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Uno de los parámetros No es un numero');
    }
    if ( b == 0) {
        res.status(400).send({"error":'No se puede dividir por cero'});}
        else{
        const result = core.div(a, b);
        await createHistoryEntry({ firstArg: a, secondArg: b, operationName: "DIV" })
        return res.send({ result });
    }
});


router.get("/mul/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b)

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Uno de los parámetros no es un número');
    } else {
        const result = core.mul(a, b);
	await createHistoryEntry({ firstArg: a, secondArg: b, operationName: "MUL" })
        return res.send({ result });
    }
});


router.get("/add/:a/:b", async function(req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Uno de los parámetros no es un número');
    } else {
        const result = core.add(a, b);
        return res.send({ result });
    }
});

router.get("/pow/:a/:b", async function(req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Uno de los parámetros no es un número');
    } else {
        const result = core.pow(a, b);
        return res.send({ result });
    }
});

export default router;
