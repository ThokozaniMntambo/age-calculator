const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/students");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Student Manager API is running." });
});

app.use("/students", studentRoutes);

module.exports = app;
