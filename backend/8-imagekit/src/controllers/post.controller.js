const sendFiles = require("../config/imagekit.config");
const PostModel = require("../models/post.model");

const createPostController = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;

    console.log(file);

    const uploadImage = await sendFiles(file.buffer, file.originalname);

    console.log(uploadImage);

    const createPost = await PostModel.create({
      caption,
      image: uploadImage.url,
    });

    return res.status(201).json({
      message: "post created successfully",
      imageURL: uploadImage.url,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  createPostController,
};
