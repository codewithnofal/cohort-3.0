const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.post("/create", (req, res) => {
  console.log(req.body);

  res.send("successfullly created")
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
