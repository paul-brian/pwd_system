const express = require("express");
const router = express.Router();
const controller = require("../../controllers/inventory/distribution.Controller");
const { verifyToken } = require("../../middlewares/auth.middleware");

router.get("/me", verifyToken, controller.getMyAssistance);
router.get("/", controller.getAll);
router.post("/", controller.create);
router.get("/user/:id", controller.getByUser);



module.exports = router;