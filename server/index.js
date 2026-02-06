const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const studentRoutes = require("./routes/students");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || "";

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Student Manager API is running." });
});

app.use("/students", studentRoutes);

const startServer = async () => {
  try {
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not set.");
    }
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
