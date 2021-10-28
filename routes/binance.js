const { Router } = require('express');
const { getDataPriceSymbol, getBidPricesForASymbol, getBidForAllSymbols } = require('../controller/binanceController');

const router = Router();

router.get('/price', getDataPriceSymbol);
router.get('/pricesforsymbol/:id', getBidPricesForASymbol);
router.get('/pricesforsymbolall', getBidForAllSymbols);


module.exports = router;