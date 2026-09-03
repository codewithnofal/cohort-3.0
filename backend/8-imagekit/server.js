require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db.config");

const port = 3000;

connectDB();

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
