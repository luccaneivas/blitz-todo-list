const UserModel = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('UserModel', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'UserModel',
    tableName: 'users',
    underscored: true,
  });

  return UserModel;
};

UserModel.associate = (models) => {
  UserModel.hasMany(models.TaskModel, { foreignKey: 'tasks', as: 'tasks' });
}

module.exports = UserModel;
