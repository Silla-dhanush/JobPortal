const express = require('express');

const router = express.Router();

const {
    jobControll,
    getJobs,
    getMyPostedJobs
} = require('../controllers/jobControllers');

const authMiddleware = require("../middleware/authMiddleware");

router.post('/', authMiddleware, jobControll);

router.get("/", getJobs);

router.get("/my", authMiddleware, getMyPostedJobs);

module.exports = router;