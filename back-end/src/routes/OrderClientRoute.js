const express = require('express');
const { getByClientId } = require('../controllers/OrderClientController');

const routeOrderClient = express.Router();

routeOrderClient.get('/orders/clients/:userId', getByClientId);

module.exports = routeOrderClient;
