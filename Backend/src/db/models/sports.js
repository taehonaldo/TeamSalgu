'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Group, {foreignKey: "sports_id", sourceKey: "sports_id"});
    }
  }
  Sports.init({
    sports_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sports_type: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'sports'
  });

  return Sports;
};