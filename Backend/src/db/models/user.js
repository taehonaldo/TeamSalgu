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

  User.associate = models => {
    User.hasMany(models.User, {foreignKey : "user_id", sourceKey: "user_id"});
    User.hasMany(models.User, {foreignKey : "sender_id", sourceKey: "user_id"});
    User.hasMany(models.User, {foreignKey : "receiver_id", sourceKey: "user_id"});
    User.belongsTo(models.file_info, {foreginKey:"profile_picture_image_id", targetKey: "file_info_id"})
  };

  return User;
};