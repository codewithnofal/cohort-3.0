const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected succesfully");
  } catch (error) {
    console.log("error while connecting to mongodb", error);
  }
};

module.exports = connectDB;
