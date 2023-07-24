const Router = require("express");
const userFunc = require("../controllers/assessment-controllers");
const router = Router();

router.get("/", userFunc.getAllUser);
router.get("/table", userFunc.tableUser);
router.post("/table", userFunc.updateTableUser);
router.get("/teacherTable", userFunc.updateTeachersTable);

module.exports = router;
