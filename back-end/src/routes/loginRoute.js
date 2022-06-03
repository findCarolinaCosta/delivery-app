const { Router } = require('express');
const controller = require('../controllers/loginController');

const loginRoute = Router();

loginRoute.post('/login', controller.login);

module.exports = loginRoute;
