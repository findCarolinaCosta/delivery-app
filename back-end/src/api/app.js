const express = require('express');
const routeOrderClient = require('../routes/OrderClientRoute');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(routeOrderClient);

module.exports = app;
