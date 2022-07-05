'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
      {
        task: 'Vencer guerra contra os Bolton',
        status: 'Pronto',
        user: '1',
      },
      {
        task: 'Matar a Daenerys',
        status: 'Pendente',
        user: '1',
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
