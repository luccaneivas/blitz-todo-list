const { StatusCodes } = require('http-status-codes');
const TaskService = require('../services/TaskService');

async function getTasks(request, response, next) {
  const { userId } = request.body;
  const { orderedBy } = request.query;

  if (!orderedBy) {
    // fazer a requisição para o model das tasks e retornar todas as tasks do usuario
    try {
      const tasks = await TaskService.getAll(userId);
      
      return response.status(StatusCodes.OK).json({ tasks });
    } catch (error) {
      next(error);
    }
  }
  
  try {
    const tasks = await TaskService.getFilteredAll(userId, orderedBy);
    
    return response.status(StatusCodes.OK).json({ tasks });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTasks };
