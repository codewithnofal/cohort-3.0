import app from "./src/app/app.js";
import connectDB from "./src/config/db.config.js";

await connectDB();

app.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
