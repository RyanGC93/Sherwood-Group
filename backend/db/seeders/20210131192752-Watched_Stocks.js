'use strict';

'use strict';
const faker = require('faker')


module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Watched_stocks', [
      {
        watchlist_id: 1,
        stock_ticker: "AAPL",
        stock_name: 'Apple Inc' ,
      },
      {
        watchlist_id: 1,
        stock_ticker: "MSFT",
        stock_name: 'Microsoft Corporation' ,
      },
      {
        watchlist_id: 1,
        stock_ticker: "AMZN",
        stock_name: 'Amazon.com Inc' ,
      },
      {
        watchlist_id: 1,
        stock_ticker: "TSLA",
        stock_name: 'Tesla Inc' ,
      },
      {
        watchlist_id: 1,
        stock_ticker: "FB",
        stock_name: 'Facebook Inc' ,
      },
      {
        watchlist_id: 2,
        stock_ticker: "JNJ",
        stock_name: 'Johnson & Johnson' ,
      },
      {
        watchlist_id: 2,
        stock_ticker: "DIS",
        stock_name: 'The Walt Disney Company' ,
      },
      {
        watchlist_id: 2,
        stock_ticker: "AMZN",
        stock_name: 'Amazon.com Inc' ,
      },
      {
        watchlist_id: 2,
        stock_ticker: "TSLA",
        stock_name: 'Tesla Inc' ,
      },
      {
        watchlist_id: 2,
        stock_ticker: "F",
        stock_name: 'Ford Motor Company' ,
      }, 
      {
        watchlist_id: 3,
        stock_ticker: "BB",
        stock_name: 'BlackBerry Limited' ,
      },
      {
        watchlist_id: 3,
        stock_ticker: "DIS",
        stock_name: 'The Walt Disney Company' ,
      },
      {
        watchlist_id: 3,
        stock_ticker: "AMD",
        stock_name: 'Advanced Micro Devices, Inc' ,
      },
      {
        watchlist_id: 3,
        stock_ticker: "TSLA",
        stock_name: 'Tesla Inc' ,
      },
      {
        watchlist_id: 3,
        stock_ticker: "GME",
        stock_name: 'GameStop Corporation' ,
      },              
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Watched_stocks', null, {});
  }
};
