const cors = require('cors');
const express = require('express');
const { loginRoute, registerRoute, productsRoute, orderClientRoute } = require('../routes');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use(loginRoute);
app.use(registerRoute);
app.use(productsRoute);
app.use(orderClientRoute);

app.use(errorMiddleware);

module.exports = app;
