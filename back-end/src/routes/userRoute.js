const { Router } = require('express');

const authMiddeware = require('../middlewares/authMiddleware');
const controller = require('../controllers/userController');

const userRoute = Router();

userRoute.get('/sellers', controller.getSellers);
userRoute.post('/users', authMiddeware, controller.create);
userRoute.get('/users', authMiddeware, controller.getAll);
userRoute.delete('/users/:id', authMiddeware, controller.destroy);

module.exports = userRoute;
