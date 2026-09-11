import userModel from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateTokens } from "../utils/auth.js";
import config from "../config/config.js";

export const registerUserController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await userModel.create({
      name,
      email,
      hashPassword: await bcrypt.hash(password, 10),
    });

    const { accessToken, refreshToken } = generateTokens({ userID: user._id });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    user.refreshToken = refreshToken;
    await user.save();

    return res.status(201).json({
      message: "User Created Successfully",
      data: {
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const getUserDetails = async (req, res) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  console.log(accessToken);

  try {
    const token = jwt.verify(accessToken, config.ACCESS_TOKEN_SECRET);

    console.log(token);

    if (!token) {
      return res.status(400).json({
        message: "Unauthorized, invalid or expired Token",
      });
    }

    const user = await userModel.findById(token.userID);

    console.log(user);

    return res.status(200).json({
      message: "User Fatched Successfully",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const getNewTokens = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  const isValidToken = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);

  console.log(isValidToken);

  const user = await userModel.findById(isValidToken.userID);

  const { accessToken, refreshToken: newRefreshToken } = generateTokens({
    userID: user._id,
  });

  user.refreshToken = newRefreshToken;
  await user.save();

  res.cookie("refreshToken", newRefreshToken, { httpOnly: true });

  return res.status(200).json({
    message: "token refresh successfully",
    accessToken,
  });
};
