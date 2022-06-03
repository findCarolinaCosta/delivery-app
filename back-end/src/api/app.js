const cors = require('cors');
const express = require('express');
const registerRoute = require('../routes/registerRoute');
const productsRoute = require('../routes/productsRoute');
const routeOrderClient = require('../routes/OrderClientRoute');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use(registerRoute);
app.use(productsRoute);
app.use(routeOrderClient);

app.use(errorMiddleware);

module.exports = app;
