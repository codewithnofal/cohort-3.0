const createPostController = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;

    console.log(caption);
    console.log(file);

    return (
      res.status(201).
      json({
        message: "post created successfully",
      })
    );
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports = {
  createPostController,
};
