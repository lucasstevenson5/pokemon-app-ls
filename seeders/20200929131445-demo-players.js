'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Players",
      [
        {
          name:'Ash Ketchum',
          username: 'ashketchum',
          password: 'pikachu',
          teamId: 1
        },
        {
          name:'Misty',
          username: 'waterbug',
          password: `starmie`,
          teamId: 2
        },
        {
          name:'Brock',
          username: 'geodude',
          password: 'lovesnursejoy',
          teamId: 3
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Players', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
