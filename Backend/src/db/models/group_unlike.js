'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group_unlike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  group_unlike.init({
    group_unlike_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    group_id: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'group_unlike',
    tableName: 'group_unlike'
  });
  
  group_unlike.associate = models =>{
    group_unlike.belongsTo(models.User, {foreignKey:"user_id", targetKey:"user_id"});
    group_unlike.belongsTo(models.Group, {foreignKey:"group_id", targetKey:"group_id"});
  }
  return group_unlike;
};