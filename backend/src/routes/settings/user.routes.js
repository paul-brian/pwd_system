const express = require("express");
const router = express.Router();
const userController = require("../../controllers/settings/user.controller");

// GET all users
router.get("/", userController.listUsers);

// PUT edit user
router.put("/edit/:userId", userController.editUser);

// PUT toggle status
router.put("/status/:userId", userController.toggleUserStatus);

module.exports = router;