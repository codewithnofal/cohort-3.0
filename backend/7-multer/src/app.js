const express = require("express");
const fileRouter = require("./routes/files.route");

const app = express();

app.use(express.json())

app.use("/files", fileRouter);

module.exports = app;
