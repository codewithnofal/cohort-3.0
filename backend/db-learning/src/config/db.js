const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://contactnofalkachhot_db_user:Hy4JTtNJkhiCGgnH@cohort-cluster.ueojyhv.mongodb.net/",
    );
    console.log("mongodb connected")
  } catch (error) {
    console.log("error in connect to db", error);
  }
};

module.exports = connectDb;
