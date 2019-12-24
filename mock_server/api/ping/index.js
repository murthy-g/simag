const { Router } = require('express');
const router = Router();

const createRouter = () => {
    return router.get('/api/ping', (req, res) => {
        res.json({ ping: 'pong'});
    });
}

module.exports = createRouter;