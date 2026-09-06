import jwt from "jsonwebtoken";
import { userModel } from "../models/users.model.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeaders = req.headers.authorization;

    const user = jwt.verify(authHeaders, process.env.JWT_SECRET);

    const findUser = await userModel.findById(user.id);

    req.user = findUser;

    next();
  } catch (error) {
    res.status(400).json({
      message: "error in authanticate middleware",
    });
  }
};
