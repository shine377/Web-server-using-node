const { Sequelize } = require("sequelize");
const sequelize = require("../Database/creatingConnection");
const assessment = sequelize.define("AssessmentDetails", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  assessmentTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dueDate: {
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
});

module.exports = assessment;
