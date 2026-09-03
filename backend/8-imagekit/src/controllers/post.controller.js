const imagekit = require("../config/imagekit.config");
const PostModel = require("../models/post.model");

const createPostController = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;

    const uploadFile = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: "uploads/",
    });

    console.log(uploadFile);

    // const createPost = await PostModel.create({
    //   caption: caption,
    //   image: uploadFile,
    // });

    return res.status(201).json({
      message: "post created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error: error,
    });
  }
};

module.exports = {
  createPostController,
};
