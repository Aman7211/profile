const express = require('express');
const router = express.Router();
const User = require('../models/profile'); // Import the User model
const create = require('../routes/createuser'); // Import createuser route

// Define a GET endpoint to fetch user data
router.get("/getuser", create, async (req, res) => {
  try {
    // Fetch all user data from the User collection
    const userData = await User.find({});
    
    // Respond with the fetched user data
    res.status(200).json({
      success: true,
      data: userData,
      message: "Entire data is fetched"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message
    });
  }
});

module.exports = router;
