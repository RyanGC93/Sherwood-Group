'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watched_stock = sequelize.define('Watched_stock', {
    watchlist_id: DataTypes.INTEGER,
    stock_id: DataTypes.INTEGER
  }, {});
  Watched_stock.associate = function(models) {
    Watched_stock.hasMany(models.Stocks, {
      foreignKey: "stock_id",
      onDelete: 'cascade',
      hooks: true,
    })
    Watched_stock.belongsTo(models.WatchList, {
      foreignKey: "watchlist_id"
    })        
  };
  return Watched_stock;
};
