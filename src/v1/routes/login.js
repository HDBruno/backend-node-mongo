const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/loginController");

router.post("/login", cors(), loginController.login);

module.exports = router;