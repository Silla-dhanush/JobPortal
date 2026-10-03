const db = require("../config/db");

const applyForJob = async (req, res) => {
    try {
        const {
            jobId,
            fullName,
            email,
            phone,
            address,
            linkedin,
            github,
            portfolio,
            resumeUrl,
            previousCompany,
            position,
            duration,
            experience
        } = req.body;

        // Validate required fields
        if (!jobId || !fullName || !email) {
            return res.status(400).json({
                message: "Job ID, full name and email are required"
            });
        }

        // Check whether the job exists
        const [jobs] = await db.query(
            "SELECT id FROM jobs WHERE id = ?",
            [jobId]
        );

        if (jobs.length === 0) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        // Check whether user already applied
        const [existingApplication] = await db.query(
            "SELECT id FROM applications WHERE user_id = ? AND job_id = ?",
            [req.user.id, jobId]
        );

        if (existingApplication.length > 0) {
            return res.status(409).json({
                message: "You have already applied for this job"
            });
        }

        // Insert application
        const [result] = await db.query(
            `INSERT INTO applications
            (
                user_id,
                job_id,
                full_name,
                email,
                phone,
                address,
                linkedin,
                github,
                portfolio,
                resume_url,
                previous_company,
                position,
                duration,
                experience
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                req.user.id,
                jobId,
                fullName,
                email,
                phone,
                address,
                linkedin,
                github,
                portfolio,
                resumeUrl,
                previousCompany,
                position,
                duration,
                experience
            ]
        );

        res.status(201).json({
            message: "Application submitted successfully",
            applicationId: result.insertId
        });

    } catch (error) {
        console.error("Application Error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

const getMyAppliedJobs = async (req, res) => {
    try {
        const [applications] = await db.query(
            `
            SELECT
                applications.id AS application_id,
                applications.created_at,
                jobs.id AS job_id,
                jobs.companyName,
                jobs.companyLogo,
                jobs.jobRole,
                jobs.employmentType,
                jobs.annualSalary,
                jobs.workMode,
                jobs.experienceRequired
            FROM applications
            JOIN jobs
            ON applications.job_id = jobs.id
            WHERE applications.user_id = ?
            `,
            [req.user.id]
        );

        res.json(applications);

    } catch (error) {
        console.error("Get My Applied Jobs Error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = {
    applyForJob,
    getMyAppliedJobs
};