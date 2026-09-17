const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const app = require("./app");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || "";

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
