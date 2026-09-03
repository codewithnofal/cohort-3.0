const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("posts", postSchema);

module.exports = PostModel;
