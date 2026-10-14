import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  ACCESS_TOKEN_SECRETS: process.env.ACCESS_TOKEN_SECRETS,
  REFRESH_TOKEN_SECRETS: process.env.REFRESH_TOKEN_SECRETS,
};

export default config;
