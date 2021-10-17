const { request, response } = require('express');
const Binance = require('node-binance-api');

const binance = new Binance().options({
    APIKEY: '<key>',
    APISECRET: '<secret>'
});

const getData = async(req = request, res = response) => {

    try {
        let ticker = await binance.prices();
        // console.info(`Price of BNB: ${ticker.BNBUSDT}`);

        res.json({ ok: true, message: 'Se obtiene la data desde el server', ticker });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Bad request' });
    }


};

module.exports = {
    getData
};