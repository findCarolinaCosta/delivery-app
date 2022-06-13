const express = require('express');
const { getByClientId, getBySaleId } = require('../controllers/ordersController');

const routeOrderClient = express.Router();

routeOrderClient.get('/orders/customer/:userId', getByClientId);

routeOrderClient.get('/orders/customer/details/:saleId', getBySaleId);
routeOrderClient.get('/orders/clients/:userId', getByClientId);

module.exports = routeOrderClient;
