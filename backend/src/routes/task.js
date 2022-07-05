const { Router } = require('express');
const taskController = require('../controllers/TaskController');

const route = Router();

route.get('/', taskController.getTasks);

module.exports = route;
