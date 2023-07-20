const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/creatingConnection");

const studentData = sequelize.define(
  "Student",
  {
    dateSubmitted: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    assessmentTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    extendedBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    approvedDueDate: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Status: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW"),
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = studentData;
