import express from 'express';
import core from './core.js';

const router = express.Router();

router.get("/sub/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = core.sub(a, b);

    return res.send({ result });
});

export default router;