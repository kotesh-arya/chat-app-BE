const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "Gets an array of chatrooms",
  });
});

module.exports = router;
