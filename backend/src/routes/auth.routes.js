const express = require("express");
const {
  loginUser,
  loginPWD
} = require("../controllers/auth.controller");

const router = express.Router();

// Admin / Staff
router.post("/login", loginUser);

// PWD
router.post("/login/pwd", loginPWD);

module.exports = router;