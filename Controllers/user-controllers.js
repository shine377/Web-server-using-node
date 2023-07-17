const studentData = require("../modals/studentModal");
const assessment = require("../modals/assessmentDetail");

const addUser = async (req, res) => {
  // let data = {
  //   dateSubmitted: req.body.dateSubmitted,
  //   assessmentTitle: req.body.assessmentTitle,
  //   entendedBy: req.body.entendedBy,
  //   approvedDueDate: req.body.approvedDueDate,
  //   Status: req.body.Status
  // };
  // const ACCEPT_FORMAT = "YYYY-MM-DD hh:mm:ss";
  // const date = req.params;
  let data = {
    assessmentTitle: req.body.assessmentTitle,
    dueDate: req.params.dueDate,
  };

  const user = await assessment.create(data);
  try {
    res.send(user);
    console.log("user created successfully");
  } catch (err) {
    console.log("User not created", err);
  }
};

const getAllUser = async (req, res) => {
  let data = await assessment.findAll();
  try {
    res.send(data);
    console.log("Got the response");
  } catch (err) {
    console.log("user not found", err);
  }
};

const getOneUser = async (req, res) => {
  let id = req.params.id;
  const data = await studentData.fineOne({ where: { id: id } });
  try {
    res.send(data);
    console.log("data is fetched successfully");
  } catch (error) {
    console.log("User not found", error);
  }
};

const updateUser = async () => {
  let id = req.params.id;
  const user = await studentData.update(req.body, { where: { id: id } });
  try {
    res.send(user);
    console.log("User is updated");
  } catch (error) {
    console.log("Updating the user is failed", error);
  }
};

const deleteUser = async () => {
  let id = req.params.id;
  await studentData.destroy({ where: { id: id } });
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
};
