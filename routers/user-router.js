const Router = require("express");
const userFunc = require("../controllers/assessment-controllers");
const router = Router();

router.get("/", userFunc.getAllUser);
router.get("/id", userFunc.getOneUser);
router.post("/", userFunc.addUser);
router.put("/id", userFunc.updateUser);
router.delete("/id", userFunc.deleteUser);
router.get("/table", userFunc.tableUser);
router.post("/table", userFunc.updateTableUser);

module.exports = router;
