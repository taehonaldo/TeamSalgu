'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class file_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  file_info.init({
    file_info_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    original_file_name: {
      type: DataTypes.STRING(255)
    },
    file_extension: {
      type: DataTypes.STRING(255)
    },
    file_path: {
      type: DataTypes.STRING(255)
    },
    file_name: {
      type: DataTypes.STRING(255)
    }
  }, {
    sequelize,
    modelName: 'file_info',
    tableName: 'file_info'
  });

  file_info.associate = models =>{
    file_info.hasOne(models.file_info, {foreginKey:"group_image_id", sourceKey: "file_info_id"})
    file_info.hasOne(models.file_info, {foreginKey:"profile_picture_image_id", sourceKey: "file_info_id"})
    file_info.hasOne(models.file_info, {foreignKey:"file_info_id", sourceKey:"file_info_id"})
  }
  return file_info;
};