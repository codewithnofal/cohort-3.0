const express = require("express");
const upload = require("../config/multer");

const router = express.Router();


router.post("/", upload.single('image'), (req, res) => {
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
