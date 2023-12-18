'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('address', 'locationLinkOfGoogleMap', {
      type: Sequelize.STRING(500),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('address', 'locationLinkOfGoogleMap', {
      type: Sequelize.STRING,
    });
  },
};
