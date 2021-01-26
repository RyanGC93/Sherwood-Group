'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    user_id: DataTypes.STRING,
    stock_id: DataTypes.STRING,
    qty_owned: DataTypes.STRING
  }, {});
  Portfolio.associate = function(models) {
    Portfolio.hasMany(models.Stocks, {
      foreignKey: "stock_id",
      onDelete: 'cascade',
      hooks: true,
    })
    Portfolio.belongsTo(models.User, {
      foreignKey: "user_id"
    })   
  };
  return Portfolio;
};
