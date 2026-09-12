import app from "./src/app/app.js";
import config from "./src/app/config/config.js";

const port = config.PORT;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
