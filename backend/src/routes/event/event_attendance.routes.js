const express = require("express");
const router = express.Router();
const controller = require("../../controllers/event/event_attendance.controller");
const { verifyToken } = require("../../middlewares/auth.middleware");

router.get("/me", verifyToken, controller.getMyAttendance);
router.get("/:eventId", controller.getEventAttendance);
router.post("/mark", controller.markAttendance);




module.exports = router;