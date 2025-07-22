// server.js
require('dotenv').config(); // ✅ LOAD THIS FIRST

const express = require('express');
const connectDB = require('./db/connect');

const app = express();
app.use(express.json());

// Optional: a test route
app.get("/", (req, res) => {
  res.send("API is working");
});

console.log("🔧 Starting server...");

connectDB()
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
  });

