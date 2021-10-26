const { request, response } = require('express');
const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: '<key>',
    APISECRET: '<secret>'
});

const getDataPriceSymbol = async(req = request, res = response) => {

    try {
        let ticker = await binance.prices();
        // console.info(`Price of BNB: ${ticker.BNBUSDT}`);

        res.json({ ok: true, message: 'Se obtiene la data desde el server', ticker });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Bad request' });
    }
};


const getlistcurrentBalances = async(req = request, res = response) => {
    try {
        binance.balance((error, balances) => {
            if (error) {
                return res.status(404).json({ message: 'Bad Request' });
            }
            console.info("balances()", balances);
            console.info("ETH balance: ", balances.ETH.available);
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error en la petición' })
    }
};

const getBidPricesForASymbol = async(req = request, res = response) => {

    const id = req.params.id;

    try {
        // 'BNBBTC'
        await binance.bookTickers(id, (error, ticker) => {

            if (error) {
                return res.status(404).json({ message: 'Bad request' });
            }
            res.json({ bookTickers: ticker });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error en la petición' });
    }
};

const getBidForAllSymbols = async(req = request, res = response) => {

    try {
        await binance.bookTickers((error, ticker) => {
            if (error) {
                return res.status(404).json({ message: 'Bad request' });
            }

            res.json({ data: ticker });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error en la petición' });
    }
};


module.exports = {
    getDataPriceSymbol,
    getlistcurrentBalances,
    getBidPricesForASymbol,
    getBidForAllSymbols
};