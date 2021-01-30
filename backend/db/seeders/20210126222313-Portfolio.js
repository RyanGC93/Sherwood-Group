'use strict';
const faker = require('faker')


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Portfolios', [
      // {
        // user_id: 0,
        // stock_id: 0,
        // qty_owned: 0,
        // 
// 
      // },
    ], {});
  // },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('Portfolios', null, {});
  }
};
