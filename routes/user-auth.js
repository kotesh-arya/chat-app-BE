const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send({
    message: "Logging-in the user if valid credentials are entered",
  });
});

module.exports = router;
