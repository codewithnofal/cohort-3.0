const express = require("express");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.route");

const app = express();

app.use(express.json());

connectDB();

app.use("/notes", notesRoute);

module.exports = app;
