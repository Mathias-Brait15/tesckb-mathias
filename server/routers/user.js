const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/getList", UserController.GetListUser);
router.post("/register", UserController.Register);
router.delete("/:id", UserController.DeletUser);
router.put("/:id", UserController.EditUser);
router.get("/:id", UserController.GetOneUser)
module.exports = router;
