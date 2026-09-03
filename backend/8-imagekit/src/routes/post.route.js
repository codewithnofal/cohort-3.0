const express = require('express');
const { createPostController } = require('../controllers/post.controller');
const upload = require('../config/multer.config');

const router = express.Router();

router.post('/api/create', upload.single('image'), createPostController)

module.exports = router;

