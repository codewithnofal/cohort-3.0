import { userModel } from "../models/users.model.js";
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
      message: "user created successfully",
      data: {
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

export const getUserDetailsController = async (req, res) => {
  res.status(200).json({
    user: {
      name: req.user.name,
      emai: req.user.email,
    },
  });
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({
        message: "invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    return res.status(200).json({
      message: "User LoggedIn Successfully",
      user: {
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server eroor",
    });
  }
};
