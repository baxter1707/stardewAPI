'use strict';
module.exports = (sequelize, DataTypes) => {
  var tools = sequelize.define('tools', {
    toolType: DataTypes.STRING,
    toolName: DataTypes.STRING,
    toolImage: DataTypes.STRING,
    toolCost: DataTypes.STRING,
    toolIngredients: DataTypes.STRING,
    toolImprovments: DataTypes.STRING
  }, {});
  tools.associate = function(models) {
    // associations can be defined here
  };
  return tools;
};