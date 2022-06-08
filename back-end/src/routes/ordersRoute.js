const express = require('express');
const { getByClientId } = require('../controllers/ordersController');

const routeOrderClient = express.Router();

routeOrderClient.get('/orders/clients/:userId', getByClientId);
routeOrderClient.get('/orders/clients/:userId', getByClientId);

module.exports = routeOrderClient;
