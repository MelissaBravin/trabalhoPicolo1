'use strict';

const criptografia = require('../criptografia')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { nome: 'John Doe', usuarioo:'mel@gmail.com', senha: criptografia.encrypt('123')},
      { nome: 'Picolo', usuarioo:'melissa@gmail.com', senha: criptografia.encrypt('123')},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
