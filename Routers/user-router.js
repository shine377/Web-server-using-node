const Router = require("express");
const userFunc = require("../Controllers/user-controllers.js");
const router = Router();

router.get("/user", userFunc.getAllUser);
router.get("/id", userFunc.getOneUser);
router.post("/user", userFunc.addUser);
router.put("/id", userFunc.updateUser);
router.delete("/id", userFunc.deleteUser);

module.exports = router;