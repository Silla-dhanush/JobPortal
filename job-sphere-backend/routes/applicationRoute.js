const express = require("express");

const router = express.Router();

const {
    applyForJob,
    getMyAppliedJobs
} = require("../controllers/applicationControllers");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, applyForJob);

router.get("/my", authMiddleware, getMyAppliedJobs);

module.exports = router;