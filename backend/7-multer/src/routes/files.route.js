const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const body = req.body;
    const file = req.file;

    console.log(body);
    console.log(file);

    return res.status(201).json({
      message: "file uploaded successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;
