require("dotenv").config();

const express = require('express')
const cors = require('cors')

require("./config/db");

const app = express()

console.log("THIS IS MY SERVER.JS");

app.use(cors());

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend is working");
});

app.use("/api/jobs", (req, res, next) => {
    console.log("REQUEST REACHED /api/jobs");
    next();
});

app.use("/api/jobs", require("./routes/jobRoute"));

app.use("/api/auth", require("./routes/authRoute"));

app.use("/api/applications", require("./routes/applicationRoute"));

app.listen(3000, () => {
    console.log("server connected succesfully")
})