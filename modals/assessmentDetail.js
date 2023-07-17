const { Sequelize } = require("sequelize");
const sequelize = require("../Database/creatingConnection");

const assessment = sequelize.define("Assessment", {
  assessmentTitle: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dueDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = assessment;
