const router = require("express").Router();

const { verifyToken } = require("../middlewares/auth.middleware");

const upload = require("../middlewares/upload.middleware");

const {
  getProfile,
  updateProfile,
  changePassword,
  uploadProfileImage,
} = require("../controllers/profile.controller");

router.get("/", verifyToken, getProfile);

router.put("/", verifyToken, updateProfile);

router.put("/password", verifyToken, changePassword);

router.put("/image", verifyToken, upload.single("image"), uploadProfileImage);

module.exports = router;