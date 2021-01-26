'use strict';
const faker = require('faker')


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Transaction_histories', [
      {
        buy_or_sell: "",	   
        mkt_price: 0.00,	   
        actual_shares: 0,
        stock_id: 0,	   
        user_id: 0,	       
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Transaction_histories', null, {});
  }
};
