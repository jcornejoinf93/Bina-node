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

        let records = [{
                "name": "Bitcoin",
                "price": ticker.BTCUSDT,
                "symbol": "BTC",
                "favorito": false
            },
            {
                "name": "Ethereum",
                "price": ticker.ETHUSDT,
                "symbol": "ETH",
                "favorito": false
            },
            {
                "name": "Binanco Coin",
                "price": ticker.BNBUSDT,
                "symbol": "BNB",
                "favorito": false
            },
            {
                "name": "Cardano",
                "price": ticker.ADAUSDT,
                "symbol": "ADA",
                "favorito": false
            },
            {
                "name": "Solana",
                "price": ticker.SOLUSDT,
                "symbol": "SOL",
                "favorito": false
            },
            {
                "name": "XRP",
                "price": ticker.XRPUSDT,
                "symbol": "XRP",
                "favorito": false
            },
            {
                "name": "Polkadot",
                "price": ticker.DOTUSDT,
                "symbol": "DOT",
                "favorito": false
            },
            {
                "name": "Dogecoin",
                "price": ticker.DOGEUSDT,
                "symbol": "DOGE",
                "favorito": false
            },
            {
                "name": "Shiba Inu",
                "price": ticker.SHIBUSDT,
                "symbol": "SHIB",
                "favorito": false
            },
            {
                "name": "Axie Infinity",
                "price": ticker.AXSUSDT,
                "symbol": "AXS",
                "favorito": false
            }
        ]

        res.json({ ok: true, message: 'Se obtiene la data desde el server', records });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Bad request' });
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
    getBidPricesForASymbol,
    getBidForAllSymbols
};