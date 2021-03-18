const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({
    "alumna": "AASH :3",
    "servicio" : "Cloud Foundry en IBM Cloud"
  });
});

module.exports = router