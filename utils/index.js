const express = require("express");
const port = 3000;
const app = express();
const router = require("../Routers/user-router");

app.use("/sequel", router);

app.listen(port, () => {
  console.log("Running on port 3000");
});
