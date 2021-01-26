'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    user_id: DataTypes.INTEGER,
    stock_id: DataTypes.INTEGER,
    qty_owned: DataTypes.INTEGER
  }, {});
  Portfolio.associate = function(models) {
    Portfolio.hasMany(models.Stock, {
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
