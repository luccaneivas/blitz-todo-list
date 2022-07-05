const { Router } = require('express');
const taskController = require('../controllers/TaskController');

const route = Router();

route.get('/', taskController.getTasks);
route.post('/', taskController.createTask);
route.delete('/');

module.exports = route;
