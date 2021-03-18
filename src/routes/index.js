const router = require('express').Router();

const autorRoute = require('./autor');

router.use('/autor', autorRoute);

module.exports = router;