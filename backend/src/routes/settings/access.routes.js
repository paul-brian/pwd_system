const express = require("express");
const router = express.Router();
const accessController = require("../../controllers/settings/access.Controller");

// User submits request
router.post("/request", accessController.submitRequest);

// Admin: list all pending requests
router.get("/requests", accessController.listRequests);

// Admin: approve or reject
router.put("/approve/:requestId", accessController.approveRequest);
router.put("/reject/:requestId", accessController.rejectRequest);

module.exports = router;