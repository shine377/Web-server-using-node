const express = require("express");
const port = 3000;
const app = express();
const router = require("../Routers/user-router");
const sequelize = require("../Database/creatingConnection");

const studentData = require("../modals/studentModal");
const teacherData = require("../modals/teacherModal");
const assessment = require("../modals/assessmentDetail");

// studentData.hasMany(teacherData);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/sequel", router);
const d = new Date();

sequelize
  .sync()
  .then((result) => {
    return assessment.create({
      assessmentTitle: "with express",
      dueDate: new Date(),
    });
  })
  .then((result) => {
    console.log("created", result);
  })
  .catch((err) => {
    console.log("error occured", err);
  });

app.listen(port, () => {
  console.log("Running on port 3000");
});
