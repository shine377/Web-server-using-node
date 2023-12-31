const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/creatingConnection");
const teacherData = require("../models/teacherModal");

const studentData = sequelize.define(
  "Students",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
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
      allowNull: false,
    },
    studentName: {
      type: Sequelize.STRING,
      allowNull: false,
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

teacherData.hasMany(studentData, { foreignKey: "teacherId" });
studentData.belongsTo(teacherData, { foreignKey: "teacherId" });

module.exports = studentData;
