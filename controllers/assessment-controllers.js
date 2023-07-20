const assessment = require("../models/assessmentDetail");
const studentData = require("../models/studentModal");

const addUser = async (req, res) => {
  let data = {
    assessmentTitle: req.body.assessmentTitle,
    dueDate: req.params.approvedDueDate,
  };

  const user = await assessment.create(data);
  try {
    res.send(user);
    console.log("user created successfully");
  } catch (err) {
    console.log("User not created", err);
  }
};

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

const updateTableUser = async (req, res) => {
  let data = {
    dateSubmitted: req.body.dateSubmitted,
    assessmentTitle: req.body.assessmentTitle,
    approvedDueDate: req.params.approvedDueDate,
    extendedBy: req.body.extendedBy,
  };
  const user = await studentData.create(data);
  try {
    res.send(user);
    console.log("user created successfully");
  } catch (err) {
    console.log("User not created", err);
  }
};

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

const getOneUser = async (req, res) => {
  let id = req.params.id;
  const data = await assessment.findOne({ where: { id: id } });
  try {
    res.send(data);
    console.log("data is fetched successfully");
  } catch (error) {
    console.log("User not found", error);
  }
};

const updateUser = async () => {
  let id = req.params.id;
  const user = await assessment.update(req.body, { where: { id: id } });
  try {
    res.send(user);
    console.log("User is updated");
  } catch (error) {
    console.log("Updating the user is failed", error);
  }
};

const deleteUser = async () => {
  let id = req.params.id;
  await assessment.destroy({ where: { id: id } });
  try {
    req.send("User Deleted");
    console.log("User is deleted");
  } catch (err) {
    console.log("User not deleted", err);
  }
};
module.exports = {
  addUser,
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
  tableUser,
  updateTableUser,
};
