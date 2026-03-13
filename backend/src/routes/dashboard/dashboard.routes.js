const express = require("express");
const router = express.Router();
const dashboard = require("../../controllers/dashboard/dashboard.controller");

router.get("/stats", dashboard.getStats);
router.get("/chart", dashboard.getMonthlyRegistrations);
router.get("/recent-pwds", dashboard.getRecentPWDs);
router.get("/logs", dashboard.getRecentLogs);

module.exports = router;