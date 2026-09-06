import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    reuired: true,
  },
  email: {
    type: String,
    reuired: true,
  },
  password: {
    type: String,
    reuired: true,
  },
});

export const userModel = mongoose.model("users", userSchema);
