'use strict';

'use strict';
const faker = require('faker')


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Watchlists', [
      {
        watchlist_name: "Hot Stocks",
        user_id: 1,

      },
       {
        watchlist_name: "Quick Gainers",
        user_id: 1,

      },
       {
        watchlist_name: "Has Potential",
        user_id: 1,

      },      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Watchlists', null, {});
  }
};
