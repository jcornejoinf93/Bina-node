const { Router } = require('express');
const { getDataPriceSymbol, getlistcurrentBalances, getBidPricesForASymbol, getBidForAllSymbols } = require('../controller/binanceController');

const router = Router();

router.get('/price', getDataPriceSymbol);
router.get('/current', getlistcurrentBalances); // error
router.get('/pricesforsymbol/:id', getBidPricesForASymbol);
router.get('/pricesforsymbolall', getBidForAllSymbols);


module.exports = router;