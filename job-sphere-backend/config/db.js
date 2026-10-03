const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.getConnection()
    .then(connection => {
        console.log("MySQL connected successfully");
        console.log("Database: job_portal");
        console.log("Host: localhost");

        connection.release();
    })
    .catch(err => {
        console.log("MySQL not connected:", err);
    });

module.exports = db;

