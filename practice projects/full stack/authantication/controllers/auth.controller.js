import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExist = await userModel.findOne(email);

  if (isUserExist) {
    return res.status(400).json({
      message: "email already in use",
    });
  }

  const user = await userModel.create({
    name,
    email,
    hashedPassword: bcrypt.hash(password, 12),
  });

  


  return res.status(201).json({
    message: "user created successfully",
  });
};
