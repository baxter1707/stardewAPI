'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tools', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      toolType: {
        type: Sequelize.STRING
      },
      toolName: {
        type: Sequelize.STRING
      },
      toolImage: {
        type: Sequelize.STRING
      },
      toolCost: {
        type: Sequelize.STRING
      },
      toolIngredients: {
        type: Sequelize.STRING
      },
      toolImprovments: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tools');
  }
};