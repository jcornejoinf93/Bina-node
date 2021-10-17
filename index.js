const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// configurar cors
app.use(cors());

// lectura del body
app.use(express.json());

app.use('/', require('./routes/binance'));

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${ process.env.PORT }`);
});