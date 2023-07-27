const assessment = require("../models/assessmentDetail");
const studentData = require("../models/studentModal");
const teacherData = require("../models/teacherModal");

//Getting data from students table
const tableUser = async (req, res) => {
  let userTableData = await studentData.findAll({});
  try {
    res.send(userTableData);
  } catch (err) {
    return err;
  }
};

//Posting data from the form to the table
const updateTableUser = async (req, res) => {
  let updatedUserData = {
    dateSubmitted: req.body.dateSubmitted,
    assessmentTitle: req.body.assessmentTitle,
    approvedDueDate: req.body.approvedDueDate,
    extendedBy: req.body.extendedBy,
    Status: "pending",
    teacherId: 1,
    studentName: "Shiny",
  };
  const user = await studentData.create(updatedUserData);
  try {
    res.send(user);
  } catch (err) {
    return err;
  }
};

//Fetching all the assessments in the dropdown
const getAllUser = async (req, res) => {
  let assessmentData = await assessment.findAll({});
  try {
    res.send(assessmentData);
  } catch (err) {
    return err;
  }
};

//Fetching data for teachers table
const updateTeachersTable = async (req, res) => {
  const updateTeacherData = await teacherData.findAll({
    include: [
      {
        model: studentData,
        as: "Students",
      },
    ],
    where: { id: 1 },
  });
  try {
    res.send(updateTeacherData);
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllUser,
  tableUser,
  updateTableUser,
  updateTeachersTable,
};
