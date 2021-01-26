'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    watchlist: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Watchlist.associate = function(models) {
    Watchlist.hasMany(models.Watched_stocks, {
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