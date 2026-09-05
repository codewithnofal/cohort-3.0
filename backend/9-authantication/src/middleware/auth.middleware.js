import jwt from "jsonwebtoken";
import userModel from "../models/auth.model.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    const data = jwt.verify(authHeader, process.env.JWT_SECRET);

    const user = await userModel.findById(data.id);

    req.user = user;

    next();
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};
