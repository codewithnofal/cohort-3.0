const express = require("express");
const postRoute = require("./routes/post.route");

const app = express();

app.use(express.json());

app.use("/post", postRoute);

module.exports = app;
