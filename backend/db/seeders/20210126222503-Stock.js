'use strict';
const faker = require('faker')


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('People', [
      {
        name: "",
        stock_ticker: " ",

      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
