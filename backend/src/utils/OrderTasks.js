function OrderTasks(filter) {
  if (filter === 'status') return ['status', 'ASC'];
  if (filter === 'alphabetical') return ['task', 'ASC'];
  if (filter === 'creation') return ['created_at', 'ASC'];
}

module.exports = OrderTasks;
