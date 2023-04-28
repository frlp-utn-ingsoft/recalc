import express from 'express';
import core from './core.js';

const router = express.Router();

router.get("/sub/:a/:b", async function (req, res) {
    const params = getRequestParameters(req, res);
    const result = core.sub(params.a, params.b);
    return res.send({result});
});

router.get("/div/:a/:b", async function (req, res) {
    try {
        const params = getRequestParameters(req, res);
        const result = core.div(params.a, params.b);
        return res.send({result})
    } catch (e) {
        res.status(400).send(e.message);
    }
});


function getRequestParameters(req) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if (isNaN(a) || isNaN(b))
        throw new Error('Uno o ambos parametros no son un numero.');
    return {a, b}
}

export default router;