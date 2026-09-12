import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("mongodb connencted");
  } catch (error) {
    console.log("error while connecting to dmongodb");
  }
};

export default connectDB;