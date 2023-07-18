const { Sequelize,DataTypes } = require("sequelize");
const sequelize = require("../Database/creatingConnection");

const studentData = sequelize.define(
  "Student",
  {
    assessmentTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entendedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    approvedDueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = studentData;
