'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Socks', [{
      title: '111',
      color: 'white',
      logo: 'logo1',
      pattern: 'pattern1',
      price: '100',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '212',
      color: 'black',
      logo: 'logo1',
      pattern: 'pattern2',
      price: '100',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: '200',
      color: 'white',
      logo: 'logo2',
      pattern: 'pattern1',
      price: '50',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Sock', null, {});
  },
};
