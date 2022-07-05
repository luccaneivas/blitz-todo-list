const { TaskModel } = require('../database/models');
const { Op } = require('sequelize');

function order(filter) {
  if (filter === 'status') return ['status', 'ASC'];
  if (filter === 'alphabetical') return ['task', 'ASC'];
  if (filter === 'creation') return ['created_at', 'ASC'];
}

async function getAll(userId) {
  // acessa a model e recupera todas as tarefas de um determinado usuário
  const tasks = await TaskModel.findAll(
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

async function getFilteredAll(userId, orderedBy) {
  // acessa a model e recupera todas as tarefas de um determinado usuário
  const tasks = await TaskModel.findAll(
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

async function createTask(userId, task, status) {
  // cria nova tarefa
  const newTask = await TaskModel.create({ task, status, user: userId });

  return newTask;
}

module.exports = { getAll, getFilteredAll, createTask };
