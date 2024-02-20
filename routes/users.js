const express = require("express");
const User = require("../models/retrieveUsers");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Retrieve all users from the MongoDB collection
    const users = await User.find();
    console.log(users);
    res.json(users); // Send the retrieved users as a JSON response
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
