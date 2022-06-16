const express = require('express');
const cors = require('cors');

const {
  loginRoute,
  registerRoute,
  productsRoute,
  userRoute,
  saleRoute,
} = require('../routes');

const errorMiddleware = require('../middlewares/errorMiddleware');
const routeOrderClient = require('../routes/ordersRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(loginRoute);
app.use(registerRoute);
app.use(productsRoute);
app.use(userRoute);
app.use(routeOrderClient);
app.use(saleRoute);

app.use(errorMiddleware);

module.exports = app;
