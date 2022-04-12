'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profile_picture_image_id: {
        type: Sequelize.INTEGER
      },
      last_password_change: {
        type: Sequelize.DATE
      },
      username: {
        type: Sequelize.STRING(15)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      nickname: {
        type: Sequelize.STRING(255)
      },
      location: {
        type: Sequelize.GEOMETRY('POINT')
      },
      age: {
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING(255)
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
    await queryInterface.dropTable('User');
  }
};