const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({
    "status": "si estoy vivo :)"
  });
});

module.exports = router