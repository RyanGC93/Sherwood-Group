'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    watchlist_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Watchlist.associate = function(models) {
    Watchlist.hasMany(models.Watched_stock, {
      foreignKey: "watchlist_id",
      onDelete: 'cascade',
      hooks: true,
    })
    Watchlist.belongsTo(models.User, {
      foreignKey: "user_id"
    }) 
  };
  return Watchlist;
};
