const express = require('express');
const { getByClientId } = require('../controller/OrderClientController');

const routeOrderClient = express.Router();

routeOrderClient.get('/orders/clients/:userId', getByClientId);

module.exports = routeOrderClient;
