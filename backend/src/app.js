const express = require('express');
const cors = require('cors');

const taskRoute = require('./routes/task');
const registerRoute = require('./routes/register');
const errorRoute = require('./middlewares/Error');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/tasks', taskRoute);
app.use('/register', registerRoute);

app.use(errorRoute);

module.exports = app;
