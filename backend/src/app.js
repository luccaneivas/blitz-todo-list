const express = require('express');
const cors = require('cors');

const listRoute = require('./routes/list');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/list', listRoute);

module.exports = app;
