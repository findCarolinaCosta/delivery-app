const cors = require('cors');
const express = require('express');
const routeOrderClient = require('../routes/OrderClientRoute');
const registerRoute = require('../routes/registerRoute');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use(registerRoute);

app.use(errorMiddleware);

app.use(routeOrderClient);

module.exports = app;
