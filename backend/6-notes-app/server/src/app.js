require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const notesRoute = require("./routes/note.route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

connectDB();

app.use("/notes", notesRoute);

module.exports = app;
