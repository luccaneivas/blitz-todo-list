const { TaskModel } = require('../database/models');
const OrderTasks = require('../utils/OrderTasks');

async function getAll(userId) {
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
  const tasks = await TaskModel.findAll(
    {
      attributes: {
        exclude: ['updatedAt']
      },
      where: {
        user: userId, 
      },
      order: [
        OrderTasks(orderedBy)
      ]
    }
  );

  return tasks;
}

async function createTask(userId, task, status) {
  const newTask = await TaskModel.create({ task, status, user: userId });

  return newTask;
}

async function deleteTask(taskId) {
  await TaskModel.destroy({ where: { id: taskId } });
}

async function getTaskById(taskId) {
  const task = await TaskModel.findByPk(taskId);
  return task;
}

async function updateTask(id, task, status) {
  await TaskModel.update({ task, status }, { where: { id } });
}

module.exports = { getAll, getFilteredAll, createTask, deleteTask, getTaskById, updateTask };
