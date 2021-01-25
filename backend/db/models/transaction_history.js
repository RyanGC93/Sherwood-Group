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
    // associations can be defined here
  };
  return Transaction_history;
};