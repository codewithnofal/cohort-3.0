require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const notesRoute = require("./routes/note.route");

const app = express();
app.use(express.json());

connectDB();

app.use("/notes", notesRoute);

module.exports = app;
