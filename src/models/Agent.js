const Sequelize = require('sequelize');
const sequelize = require('../database/dbConnection');

const Agent = sequelize.define(
  'agent',
  {
    id: {
      type: Sequelize.STRING(12),
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING,
      default: 'AGENT',
    },
    agentName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    agentImage: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    position: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    yearsOfExperience: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    languages: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    },
    agencyName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    agencyLogo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Agent;
