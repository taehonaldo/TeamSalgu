'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('file_info', {
      file_info_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      original_file_name: {
        type: Sequelize.STRING(255)
      },
      file_extension: {
        type: Sequelize.STRING(255)
      },
      file_path: {
        type: Sequelize.STRING(255)
      },
      file_name: {
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
    await queryInterface.dropTable('file_info');
  }
};