// migrations/20231223123456-add-propertyStatus.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the propertyStatus field
    await queryInterface.addColumn('property', 'propertyStatus', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Rollback the addition of propertyStatus (if needed)
    await queryInterface.removeColumn('property', 'propertyStatus');
  },
};

