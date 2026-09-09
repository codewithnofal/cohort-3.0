import bcrypt from "bcryptjs";
import userModel from "../models/auth.model.js";
import { generateTokens, verifyAccessTokon } from "../utils/auth.js";

export const registerUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isEmailExist = await userModel.findOne({ email });

    if (isEmailExist) {
      return res.status(400).json({
        message: "user email already exist",
      });
    }

    const user = await userModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(password, 10),
    });

    const { refreshToken, accessToken } = generateTokens({ userID: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "User Created Successfully",
      data: {
        name: user.name,
        emai: user.email,
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
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const decode = verifyAccessTokon(accessToken);

    const user = await userModel.findById(decode.id);

    return res.status(200).json({
      message: "user fatched successfully",
      data: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Unauthorized, accessToken expires",
    });
  }
};
