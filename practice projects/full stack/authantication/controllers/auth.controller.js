import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokens } from "../utils/auth.js";

export const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  const isUserExist = await userModel.findOne({email});

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

  const { accessToken, refreshToken } = generateTokens({ userId: user._id });

  await userModel.findByIdAndUpdate(user._id, { refreshToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  return res.status(201).json({
    message: "user created successfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    },
  });
};
