'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Group.init({
    group_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    group_image_id: {
      type: DataTypes.INTEGER
    },
    sports_id: {
      type: DataTypes.INTEGER
    },
    group_name: {
      type: DataTypes.STRING(255)
    },
    participants: {
      type: DataTypes.INTEGER
    },
    capacity: {
      type: DataTypes.INTEGER
    },
    play_datetime: {
      type: DataTypes.DATE
    },
    accessability: {
      type: DataTypes.BOOLEAN
    },
    location: {
      type: DataTypes.GEOMETRY('POINT')
    },
    min_age: {
      type: DataTypes.INTEGER
    },
    max_age: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Group',
    tableName: 'GROUP'
  });
  return Group;
};