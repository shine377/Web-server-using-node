"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("AssessmentDetails", [
      {
        assessmentTitle: "Philosophical orientation",
        dueDate: "2023-07-25",
      },
      {
        assessmentTitle: "Metaphorical orientation",
        dueDate: "2023-07-28",
      },
      {
        assessmentTitle: "Leading theorists",
        dueDate: "2023-08-05",
      },
      {
        assessmentTitle: "Nature of mind",
        dueDate: "2023-08-12",
      },
      {
        assessmentTitle: "Nature of knowledge",
        dueDate: "2023-08-15",
      },
      {
        assessmentTitle: "Nature of learning",
        dueDate: "2023-08-20",
      },
      {
        assessmentTitle: "Features of authentic assessment",
        dueDate: "2023-08-25",
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
