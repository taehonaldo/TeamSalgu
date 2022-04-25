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

  Message.associate = models =>{
    Message.belongsTo(models.User, {foreignKey: "sender_id", targetKey: "user_id"});
    Message.belongsTo(models.User, {foreignKey: "receiver_id", targetKey: "user_id"});
    Message.belongsTo(models.Group, {foreignKey:"group_id", targetKey:"group_id"});
    Message.belongsTo(models.file_info, {foreignKey:"file_info_id", targetKey:"file_info_id"})
  }

  return Message;
};