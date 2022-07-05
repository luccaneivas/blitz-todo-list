const { TaskModel } = require('../database/models');
const { Op } = require('sequelize');

function order(filter) {
  if (filter === 'status') return ['status', 'ASC'];
  if (filter === 'alphabetical') return ['task', 'ASC'];
  if (filter === 'creation') return ['created_at', 'ASC'];
}

function getAll(userId) {
  // acessa a model e recupera todas as tarefas de um determinado usuário
  const tasks = TaskModel.findAll(
    {
      attributes: {
        exclude: ['updatedAt']
      },
      where: {
        user: userId,
      },
    }
  );

  return tasks;
}

function getFilteredAll(userId, orderedBy) {
  // acessa a model e recupera todas as tarefas de um determinado usuário
  const tasks = TaskModel.findAll(
    {
      attributes: {
        exclude: ['updatedAt']
      },
      where: {
        user: userId,
      },
      order: [
        order(orderedBy)
      ]
    }
  );

  return tasks;
}

module.exports = { getAll, getFilteredAll };
