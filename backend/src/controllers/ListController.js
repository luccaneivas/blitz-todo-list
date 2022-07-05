const { StatusCodes } = require('http-status-codes');
const ListService = require('../services/ListService');

async function getList(request, response, next) {
  const { filter } = request.query;

  if (!filter) {
    // fazer a requisição para o model das listas e retornar todas as listas
    try {
      const lists = await ListService.getAll();
      return response.status(StatusCodes.OK).json({ lists });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = { getList };
