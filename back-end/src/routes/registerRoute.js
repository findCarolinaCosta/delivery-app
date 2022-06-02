const { Router } = require('express');
const controller = require('../controllers/registerController');

const registerRoute = Router();

registerRoute.post('/register', controller.create);

module.exports = registerRoute;
