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
    role: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'group_join',
    tableName: 'group_join'
  });
  group_join.associate = models =>{
    group_join.belongsTo(models.User, {foreignKey:"user_id", targetKey:"user_id"});
    group_join.belongsTo(models.Group, {foreignKey:"group_id", targetKey:"group_id"});
  }
  return group_join;
};