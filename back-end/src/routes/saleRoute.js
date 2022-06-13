const express = require('express');

const saleController = require('../controllers/saleController');

const routeSaleClient = express.Router();

routeSaleClient.post('/customer/checkout', saleController.create);

module.exports = routeSaleClient;
