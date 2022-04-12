'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Message.init({
    message_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    group_id: {
      type: DataTypes.INTEGER
    },
    sender_id: {
      type: DataTypes.INTEGER
    },
    receiver_id: {
      type: DataTypes.INTEGER
    },
    file_info_id: {
      type: DataTypes.INTEGER
    },
    text: {
      type: DataTypes.TEXT
    },
    is_read: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Message',
    tableName: 'Message'
  });
  return Message;
};