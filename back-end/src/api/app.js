const express = require('express');
const cors = require('cors');
const registerRoute = require('../routes/registerRoute');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.use(registerRoute);

app.use(errorMiddleware);

module.exports = app;
