import userModel from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    return res.status(201).json({
      message: "User created successfully",
      user: {
        name,
        email,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const getUserDetails = async (req, res) => {
  res.status(200).json({
    data: {
      user: req.user,
    },
  });
};

export const loginUserController = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
