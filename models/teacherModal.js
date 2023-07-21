const { Sequelize } = require("sequelize");
const sequelize = require("../database/creatingConnection");

const teacherData = sequelize.define("Teachers", {
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  studentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateSubmitted: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  assessmentTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = teacherData;
