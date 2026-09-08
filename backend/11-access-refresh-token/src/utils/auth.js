import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const generateTokens = ({ userID }) => {
  const accessToken = jwt.sign({ id: userID }, config.ACCESS_TOKEN_SECRETS, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ id: userID }, config.REFRESH_TOKEN_SECRETS, {
    expiresIn: "7d",
  });

  return {
    accessToken,
    refreshToken,
  };
};

export const verifyAccessTokon = (token) => {
  const decode = jwt.verify(token, config.ACCESS_TOKEN_SECRETS);
  return decode
};

