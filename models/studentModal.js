const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/creatingConnection");
const teacherData = require("../models/teacherModal");
const { v4: uuidv4 } = require("uuid");

const studentData = sequelize.define(
  "Student",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: () => uuidv4(),
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

studentData.hasMany(teacherData, {
  foreignKey: "student_id",
  sourceKey: "id",
  as: "teacherEntries",
});

module.exports = studentData;
