const express = require('express');
const cors = require('cors');

const listRoute = require('./routes/list');
const errorRoute = require('./middlewares/Error');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/list', listRoute);

app.use(errorRoute);

module.exports = app;
