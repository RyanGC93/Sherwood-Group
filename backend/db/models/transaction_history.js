'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction_history = sequelize.define('Transaction_history', {
    buy_or_sell: DataTypes.STRING,
    mkt_price: DataTypes.FLOAT,
    actual_shares: DataTypes.FLOAT,
    stock_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Transaction_history.associate = function(models) {
    Transaction_history.hasMany(models.Stocks, {
      foreignKey: "stock_id",
      onDelete: 'cascade',
      hooks: true,
    })
    Transaction_history.belongsTo(models.User, {
      foreignKey: "user_id"
    })    
  };
  return Transaction_history;
};
