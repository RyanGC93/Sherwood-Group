'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      let users = [{
        username: 'Demo',
        firstname: 'Demo',
        lastname: 'User' ,
        email: 'demo@demo.com',               
		    buying_power: 123123,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        username: 'FakeUser1',
        firstname: 'Demos',
        lastname: 'Usser',        
        email: faker.internet.email(),
        buying_power: 1123,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username: 'FakeUser2',
        firstname: 'Demossdsd',
        lastname: 'Ussdser',  
        email: faker.internet.email(),
        buying_power: 91123,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        }]
        for (let i = 0; i < 45; i++) {
          let newUser = {
            username: faker.internet.userName(),
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            buying_power: faker.random.number(),
            // hashedPassword: await bcrypt.hash(`password${i}`, 10),
            hashedPassword: bcrypt.hashSync(faker.internet.password()),
            // createdAt: new Date(),
            // updatedAt: new Date(),
          };
          users.push(newUser)
        }
        return queryInterface.bulkInsert('Users',users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
