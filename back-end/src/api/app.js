const cors = require('cors');
const express = require('express');
const { loginRoute, registerRoute, orderClientRoute } = require('../routes');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use(registerRoute);
app.use(loginRoute);
app.use(orderClientRoute);

app.use(errorMiddleware);

module.exports = app;
