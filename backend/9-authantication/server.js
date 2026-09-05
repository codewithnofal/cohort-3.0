import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import { connectDB } from "./src/config/db.config.js";

const port = process.env.PORT || 8000;

await connectDB()

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
