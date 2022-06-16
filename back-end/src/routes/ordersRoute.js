const express = require('express');
const { getByClientId, getBySellerId } = require('../controllers/ordersController');

const OrderRoute = express.Router();

OrderRoute.get('/orders/clients/:userId', getByClientId);

OrderRoute.get('/orders/seller/:sellerId', getBySellerId);

module.exports = OrderRoute;
