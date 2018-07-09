'use strict';
module.exports = (sequelize, DataTypes) => {
  var farm = sequelize.define('farm', {
    farmName: DataTypes.STRING,
    farmDescription: DataTypes.TEXT,
    farmImage: DataTypes.STRING,
    farmSkill: DataTypes.STRING
  }, {});
  farm.associate = function(models) {
    // associations can be defined here
  };
  return farm;
};
