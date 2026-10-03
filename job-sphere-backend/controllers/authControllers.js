const bcrypt = require("bcrypt");
const db = require("../config/db");

const registerUser = async (req, res) => {
    try {
        const { userName, mailId, password } = req.body;

        // Check required fields
        if (!userName || !mailId || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check whether email already exists
        const [existingUsers] = await db.query(
            "SELECT id FROM users WHERE mailId = ?",
            [mailId]
        );

        if (existingUsers.length > 0) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into database
        const [result] = await db.query(
            "INSERT INTO users (userName, mailId, password) VALUES (?, ?, ?)",
            [userName, mailId, hashedPassword]
        );

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: result.insertId,
                userName,
                mailId
            }
        });

    } catch (err) {
        console.error("Register Error:", err);

        res.status(500).json({
            message: "Server error"
        });
    }
};

const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {
        const { mailId, password } = req.body;

        if (!mailId || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Find user
        const [users] = await db.query(
            "SELECT * FROM users WHERE mailId = ?",
            [mailId]
        );

        if (users.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = users[0];

        // Check password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Create JWT
        const token = jwt.sign(
            {
                id: user.id,
                mailId: user.mailId
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                userName: user.userName,
                mailId: user.mailId
            }
        });

    } catch (err) {
        console.error("Login Error:", err);

        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = { registerUser, loginUser };