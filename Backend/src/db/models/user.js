'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    profile_picture_image_id: {
      type: DataTypes.INTEGER
    },
    last_password_change: {
      type: DataTypes.DATE
    },
    username: {
      type: DataTypes.STRING(15)
    },
    password: {
      type: DataTypes.STRING(255)
    },
    nickname: {
      type: DataTypes.STRING(255)
    },
    location: {
      type: DataTypes.GEOMETRY('POINT')
    },
    age: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User'
  });
  return User;
};