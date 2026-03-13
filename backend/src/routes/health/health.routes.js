const express = require("express");
const router = express.Router();
const healthController = require("../../controllers/health/health.controller");
const { verifyToken } = require("../../middlewares/auth.middleware");

router.get("/me", verifyToken, healthController.getMyHealth);
router.get("/", healthController.getAllHealth);
router.get("/:pwd_id", healthController.getHealthByPwd);
router.post("/", healthController.createHealth);
router.put("/:id", healthController.updateHealth);
router.delete("/:id", healthController.deleteHealth);



module.exports = router;