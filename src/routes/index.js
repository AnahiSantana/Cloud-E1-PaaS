const router = require('express').Router();

const helloRoute = require('./vivo');

router.use('/estoyvivo', helloRoute);

module.exports = router;