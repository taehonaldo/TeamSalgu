'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'user_id'});
      this.belongsTo(models.Group, {foreignKey: 'group_id'});
    }
  }
  GroupJoin.init({
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
    tableName: 'group_join',
    underscored: true,
    timestamps: true,
  });

  return GroupJoin;
};