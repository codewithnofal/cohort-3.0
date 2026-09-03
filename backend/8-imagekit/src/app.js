const express = require("express");
const postRoute = require("./routes/post.route");

const app = express();

app.use(express.json());

app.use("/api/post", postRoute);

module.exports = app;
