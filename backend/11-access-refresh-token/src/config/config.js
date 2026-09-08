import dotenv from "dotenv";
dotenv.config();

export const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  ACCESS_TOKEN_SECRETS: process.env.ACCESS_TOKEN_SECRETS,
  REFRESH_TOKEN_SECRETS: process.env.REFRESH_TOKEN_SECRETS,
};
