'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    name: DataTypes.STRING,
    stock_ticker: DataTypes.STRING
  }, {});
  Stock.associate = function(models) {
    Stock.belongsTo(models.Portfolio, {
      foreignKey: "stock_id"
    })    
    Stock.belongsTo(models.Watched_stocks, {
      foreignKey: "stock_id"
    })        
    Stock.belongsTo(models.Transaction_history, {
      foreignKey: "stock_id"
    })       
  };
  return Stock;
};
