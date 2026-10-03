console.log("🔥 NEW MYSQL JOB CONTROLLER LOADED");

const db = require("../config/db");

const getJobs = async (req, res) => {
    try {
        const [jobs] = await db.query("SELECT * FROM jobs");

        res.json(jobs);
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ message: err.message });
    }
};

const jobControll = async (req, res) => {
    try {
        console.log("POST BODY:", req.body);

        const {
            companyName,
            companyLogo,
            jobRole,
            employmentType,
            annualSalary,
            workMode,
            experienceRequired,
            skills
        } = req.body;

        const sql = `
            INSERT INTO jobs
            (companyName, companyLogo, jobRole, employmentType,
             annualSalary, workMode, experienceRequired, skills,  user_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            companyName,
            companyLogo,
            jobRole,
            employmentType,
            annualSalary,
            workMode,
            experienceRequired,
            JSON.stringify(skills),
            req.user.id
        ];

        const [result] = await db.query(sql, values);

        res.status(201).json({
            id: result.insertId,
            companyName,
            companyLogo,
            jobRole,
            employmentType,
            annualSalary,
            workMode,
            experienceRequired,
            skills
        });

    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ message: err.message });
    }
};

const getMyPostedJobs = async (req, res) => {
    try {
        const [jobs] = await db.query(
            "SELECT * FROM jobs WHERE user_id = ?",
            [req.user.id]
        );

        res.json(jobs);

    } catch (err) {
        console.error("Get My Posted Jobs Error:", err);

        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = { jobControll, getJobs, getMyPostedJobs };