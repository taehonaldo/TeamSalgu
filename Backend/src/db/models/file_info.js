'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Group, {foreignKey: "group_image_id", sourceKey: "file_info_id"});
    }
  }
  FileInfo.init({
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
    tableName: 'file_info',
    underscored: true
  });

  return FileInfo;
};