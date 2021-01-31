'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watched_stock = sequelize.define('Watched_stock', {
    watchlist_id: DataTypes.INTEGER,
    stock_ticker: DataTypes.STRING,
    stock_name: DataTypes.STRING,
  }, {});
  Watched_stock.associate = function(models) {
    Watched_stock.hasMany(models.Stock, {
      foreignKey: "stock_id",
      onDelete: 'cascade',
      hooks: true,
    })
    Watched_stock.belongsTo(models.Watchlist, {
      foreignKey: "watchlist_id"
    })        
  };
  return Watched_stock;
};
