'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group_join extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  group_join.init({
    group_join_id: {
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
    role: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'group_join',
    tableName: 'group_join'
  });
  return group_join;
};