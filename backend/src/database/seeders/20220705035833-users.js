'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Jon Snow',
        email: 'jonsnow@email.com',
        password: '$2a$12$uGkO742gJ098TINbWXJLGeaL/FE0goFQkM9ULD4I/7vHmwYPFj7c.', // secret_jonsnow
      },
      {
        name: 'Nancy Wheeler',
        email: 'nancywheeler@email.com',
        password: '$2a$12$qXJtEYJonPbgO0nqscVNMOwoPU1VyjCyNFiecm733f4YrW0o5.65O', // secret_nancywheel
      }
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
