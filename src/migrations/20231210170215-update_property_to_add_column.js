'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
 async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('property', 'locationLinkOfGoogleMap', {
      type: Sequelize.STRING(500),
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('property', 'locationLinkOfGoogleMap');
  },
};
