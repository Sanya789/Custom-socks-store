module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carts', [{
      user_id: '1',
      sock_id: '2',
      count: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '1',
      sock_id: '3',
      count: '3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '1',
      sock_id: '2',
      count: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: '1',
      sock_id: '2',
      count: '1',
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
  },
};
