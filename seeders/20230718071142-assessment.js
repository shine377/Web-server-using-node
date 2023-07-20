// "use strict";

/** @type {import('sequelize-cli').Migration} */
const moment = require("moment");
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AssessmentDetails", [
      {
        assessmentTitle: "Philosophical orientation",
        dueDate: moment().format("2023-10-31T09:00:00.594Z"),
      },
      {
        assessmentTitle: "Metaphorical orientation",
        dueDate: moment().format("2023-08-13:14:30:01.766Z"),
      },
      {
        assessmentTitle: "Leading theorists",
        dueDate: moment().format("2023-08-12T15:53:25.390Z"),
      },
      {
        assessmentTitle: "Nature of mind",
        dueDate: moment().format("2023-07-22T12:03:01.766Z"),
      },
      {
        assessmentTitle: "Nature of knowledge",
        dueDate: moment().format("2023-08-12T18:30:00.808Z"),
      },
      {
        assessmentTitle: "Nature of learning",
        dueDate: moment().format("2023-08-11T18:30:00.766Z"),
      },
      {
        assessmentTitle: "Features of authentic assessment",
        dueDate: moment().format("2023-07-20T08:51:05.495Z"),
      },
    ]);
  },
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Student", [
      {
        dateSubmitted: moment().format("31/10/2023, 14:30:01"),
        assessmentTitle: "Philosophical orientation",
        extendedBy: "2",
        approvedDueDate: moment().format("31/10/2023, 14:30:01"),
      },
    ]);
  },

  // async down(queryInterface, Sequelize) {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // },
};
