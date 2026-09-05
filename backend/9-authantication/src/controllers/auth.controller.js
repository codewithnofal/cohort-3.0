import AuthModel from "../models/auth.model.js";
import jwt from "jsonwebtoken";

export const registerUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await AuthModel.create({
      name,
      email,
      password,
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
  const authHeader = req.headers.authorization;

  console.log(authHeader);

  const data = jwt.verify(authHeader, process.env.JWT_SECRET);

  const user = await AuthModel.findById(data.id);

  console.log(user);
};
