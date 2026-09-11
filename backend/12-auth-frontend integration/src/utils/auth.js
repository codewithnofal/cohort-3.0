import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const generateTokens = ({ userID }) => {
  const accessToken = jwt.sign({ userID }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ userID }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return {
    accessToken,
    refreshToken,
  };
};
