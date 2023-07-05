const addUser = async (req, res) => {
  let data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    MobileNumber: req.body.MobileNumber,
    Gender: req.body.Gender,
    Email: req.body.Email,
    Country: req.body.Country,
  };

  const user = await create(data);
  try {
    res.send(user);
    console.log("user created successfully");
  } catch (err) {
    console.log("User not created", err);
  }
};

const getAllUser = async (req, res) => {
  let data = await User.findAll();
  try {
    res.send(data);
    console.log("Got the response");
  } catch (err) {
    console.log("user not found", err);
  }
};

const getOneUser = async (req, res) => {
  let id = req.params.id;
  const data = await fineOne({ where: { id: id } });
  try {
    res.send(data);
    console.log("data is fetched successfully");
  } catch (error) {
    console.log("User not found", error);
  }
};

const updateUser = async () => {
  let id = req.params.id;
  const user = await update(req.body, { where: { id: id } });
  try {
    res.send(user);
    console.log("User is updated");
  } catch (error) {
    console.log("Updating the user is failed", error);
  }
};

const deleteUser = async () => {
  let id = req.params.id;
  await destroy({ where: { id: id } });
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
