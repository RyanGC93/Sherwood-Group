'use strict';
const faker = require('faker')


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('People', [
      {
        watchlist: "",
        user_id: 0,

      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
