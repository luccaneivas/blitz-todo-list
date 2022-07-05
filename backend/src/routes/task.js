const { Router } = require('express');
const TaskController = require('../controllers/TaskController');

const route = Router();

route.get('/', TaskController.getTasks);
route.post('/', TaskController.createTask);
route.delete('/:taskId', TaskController.deleteTask);
route.put('/:taskId', TaskController.updateTask);

module.exports = route;
