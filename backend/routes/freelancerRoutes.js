const express = require("express");
const router = express.Router();
const Freelancer = require("../models/Freelancer");

router.post("/freelancer", async (req, res) => {
  try {
    const freelancer = new Freelancer(req.body);
    await freelancer.save();
    res.status(201).json({ message: "Freelancer form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
});

module.exports = router;
