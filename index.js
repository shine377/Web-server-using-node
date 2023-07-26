const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const router = require("../DB with sequelize/routers/user");
const sequelize = require("../DB with sequelize/database/creatingConnection");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

sequelize
  .sync({ alter: true })
  .then((result) => {
    console.log("created");
  })
  .catch((err) => {
    console.log("error occured", err);
  });

app.listen(port, () => {
  console.log("Running on port 8000");
});
