const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "Gets a message",
  });
});

module.exports = router;
