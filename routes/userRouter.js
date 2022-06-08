const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userCtrl");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);

module.exports = router;