const TaskModel = (sequelize, DataTypes) => {
  const TaskModel = sequelize.define('TaskModel', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    task: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: { 
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at',
    },
  }, {
    sequelize,
    modelName: 'TaskModel',
    tableName: 'tasks',
    underscored: true,
  });

  return TaskModel;
};

TaskModel.associate = (models) => {
  TaskModel.belongsTo(models.UserModel, { foreignKey: 'tasks', as: 'tasks' });
}

module.exports = TaskModel;
