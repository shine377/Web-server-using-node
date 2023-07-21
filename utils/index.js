const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const router = require("../routers/user-router");
const sequelize = require("../database/creatingConnection");

// const studentData = require("../modals/studentModal");
// const teacherData = require("../modals/teacherModal");
// const assessment = require("../modals/assessmentDetail");

// studentData.hasMany(teacherData);
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/user", router);

sequelize
  .sync({ alter: true })
  .then((result) => {
    console.log("created", result);
  })
  .catch((err) => {
    console.log("error occured", err);
  });

app.listen(port, () => {
  console.log("Running on port 3000");
});
