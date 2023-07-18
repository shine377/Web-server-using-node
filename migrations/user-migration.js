"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AssessmentDetails", {
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
  },
  //   async up(queryInterface, Sequelize) {
  //     await queryInterface.createTable("Student", {
  //       assessmentTitle: {
  //         type: Sequelize.STRING,
  //         allowNull: false,
  //       },
  //       entendedBy: {
  //         type: Sequelize.INTEGER,
  //         allowNull: false,
  //       },
  //       approvedDueDate: {
  //         type: Sequelize.DATE,
  //         allowNull: false,
  //       },
  //       Status: {
  //         type: Sequelize.STRING,
  //         allowNull: false,
  //       },
  //     });
  //   },
  //   async up(queryInterface, Sequelize) {
  //     await queryInterface.createTable("Teacher", {
  //       studentId: {
  //         type: Sequelize.INTEGER,
  //         allowNull: false,
  //       },
  //       studentName: {
  //         type: Sequelize.STRING,
  //         allowNull: false,
  //       },
  //       dateSubmitted: {
  //         type: Sequelize.INTEGER,
  //         allowNull: false,
  //       },
  //       assessmentTitle: {
  //         type: Sequelize.STRING,
  //         allowNull: false,
  //       },
  //       Status: {
  //         type: Sequelize.STRING,
  //         allowNull: false,
  //       },
  //     });
  //   },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("AssessmentDetail");
  },
};
