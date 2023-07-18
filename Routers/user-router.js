const Router = require("express");
const userFunc = require("../Controllers/user-controllers.js");
const router = Router();

router.get("/", userFunc.getAllUser);
router.get("/id", userFunc.getOneUser);
router.post("/", userFunc.addUser);
router.put("/id", userFunc.updateUser);
router.delete("/id", userFunc.deleteUser);

module.exports = router;