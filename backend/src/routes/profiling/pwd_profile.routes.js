const express = require("express");
const router = express.Router();
const pwdController = require("../../controllers/profiling/pwd_profile.controller");
const { verifyToken } = require("../../middlewares/auth.middleware");

// ── Admin routes ──
router.get("/", pwdController.getProfiles);
router.post("/", pwdController.createProfile);
router.put("/:id", pwdController.updateProfile);
router.delete("/:id", pwdController.deleteProfile);

// ── Logged-in PWD user routes ──
router.get("/me", verifyToken, pwdController.getMyProfile);
router.put("/me/update", verifyToken, pwdController.updateMyProfile);

module.exports = router;