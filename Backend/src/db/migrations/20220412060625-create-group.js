'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Group', {
      group_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_image_id: {
        type: Sequelize.INTEGER
      },
      sports_id: {
        type: Sequelize.INTEGER
      },
      group_name: {
        type: Sequelize.STRING(255)
      },
      participants: {
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      play_datetime: {
        type: Sequelize.DATE
      },
      accessability: {
        type: Sequelize.BOOLEAN
      },
      location: {
        type: Sequelize.GEOMETRY('POINT')
      },
      min_age: {
        type: Sequelize.INTEGER
      },
      max_age: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Group');
  }
};