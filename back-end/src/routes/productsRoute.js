const { Router } = require('express');
const controller = require('../controllers/productsController');

const productsRoute = Router();

productsRoute.get('/products', controller.getAll);

module.exports = productsRoute;
