const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connencted")
  } catch (error) {
    console.log("error while connecting mongodb", error);
  }
};

module.exports = connectDB;
