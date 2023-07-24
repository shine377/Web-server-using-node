const assessment = require("../models/assessmentDetail");
const studentData = require("../models/studentModal");
const teacherData = require("../models/teacherModal");


//getting data from students table
const tableUser = async (req, res) => {
  let data = await studentData.findAll({});
  try {
    console.log(data);

    res.send(data);
    console.log("Got the response");
  } catch (err) {
    console.log("user not found", err);
  }
};


//posting data from the form to the table
const updateTableUser = async (req, res) => {
  let data = {
    dateSubmitted: req.body.dateSubmitted,
    assessmentTitle: req.body.assessmentTitle,
    approvedDueDate: req.body.approvedDueDate,
    extendedBy: req.body.extendedBy,
    Status: "pending",
    teacherId: 1,
    studentName: "Shiny",
  };
  const user = await studentData.create(data);
  try {
    res.send(user);
    console.log("user created successfully");
  } catch (err) {
    console.log("User not created", err);
  }
};


//fetching all the assessments in the dropdown
const getAllUser = async (req, res) => {
  let data = await assessment.findAll({});
  try {
    console.log(data);

    res.send(data);
    console.log("Got the response");
  } catch (err) {
    console.log("user not found", err);
  }
};


//fetching data for teachers table
const updateTeachersTable = async (req, res) => {
  const data = await teacherData.findAll({
    include: [
      {
        model: studentData,
        as: "Students",
      },
    ],
    where: { id: 1 },
  });
  try {
    console.log(data);
    res.send(data);
    console.log("Got the response");
  } catch (err) {
    console.log("user not found", err);
  }
};

module.exports = {
  getAllUser,
  tableUser,
  updateTableUser,
  updateTeachersTable,
};
