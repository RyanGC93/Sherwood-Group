'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    user_id: DataTypes.STRING,
    stock_id: DataTypes.STRING,
    qty_owned: DataTypes.STRING
  }, {});
  Portfolio.associate = function(models) {
    // associations can be defined here
  };
  return Portfolio;
};