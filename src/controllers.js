import express from 'express';
import core from './core.js';

import { createHistoryEntry } from './models.js'

const router = express.Router();

router.get("/sub/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Uno de los parámetros no es un número');
    } else {
        const result = core.sub(a, b);

        await createHistoryEntry({ firstArg: a, secondArg: b, result, operationName: "SUB" })
        return res.send({ result });
    }
});

export default router;