const { Router } = require('express');
const { getData } = require('../controller/binanceController');

const router = Router();

router.get('/', getData);

module.exports = router;