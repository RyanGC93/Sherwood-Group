'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watched_stock = sequelize.define('Watched_stock', {
    watchlist_id: DataTypes.INTEGER,
    stock_id: DataTypes.INTEGER
  }, {});
  Watched_stock.associate = function(models) {
    // associations can be defined here
  };
  return Watched_stock;
};