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

  Group.associate = models => {
    Group.hasMany(models.Group, {foreignKey:"group_id", sourceKey:"group_id"});
    Group.belongsTo(models.file_info, {foreginKey:"group_image_id", targetKey: "file_info_id"});
    Group.belongsTo(models.sports, {foreginKey:"sports_id", targetKey: "sports_id"});

  }

  return Group;
};