const { StatusCodes } = require('http-status-codes');
const TaskService = require('../services/TaskService');

async function getTasks(request, response, next) {
  const { userId } = request.body;
  const { orderedBy } = request.query;

  try {
    if (!orderedBy) {
      // fazer a requisição para o model das tasks e retornar todas as tasks do usuario
      const tasks = await TaskService.getAll(userId);
      return response.status(StatusCodes.OK).json({ tasks });
    }
    
    const tasks = await TaskService.getFilteredAll(userId, orderedBy);
    return response.status(StatusCodes.OK).json({ tasks });

  } catch (error) {
    next(error);
  }
};

async function createTask(request, response, next) {
  const { userId, task, status } = request.body;

  try {
    const { id, createdAt } = await TaskService.createTask(userId, task, status);
    return response.status(StatusCodes.CREATED).json({ taskId: id, task, status, userId, createdAt });
  } catch (error) {
    next(error);
  }
};

async function deleteTask(request, response, next) {
  const { taskId } = request.params;

  try {
    await TaskService.deleteTask(taskId);
    return response.status(StatusCodes.OK).json({ message: 'Deleted sucessfully!' })
  } catch (error) {
    next(error);
  }
}

async function updateTask(request, response, next) {
  const { taskId } = request.params;
  const { task, status, userId } = request.body;

  try {
    await TaskService.updateTask(taskId, task, status);
    return response.status(StatusCodes.OK).json({ id: taskId, task, status, user: userId });
  } catch (error) {
    next(error);
  }
}

module.exports = { getTasks, createTask, deleteTask, updateTask };
