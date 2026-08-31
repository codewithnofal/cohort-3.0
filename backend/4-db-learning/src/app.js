const express = require("express");
const connectDb = require("./config/db");
const { default: mongoose } = require("mongoose");
const notesModel = require("./models/note.model");

const app = express();

app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send("server is running.");
});

app.post("/create", async (req, res) => {
  const { title, description } = req.body;

  const newNote = await notesModel.create({
    title,
    description,
  });

  res.send({
    success: true,
    message: "Note created succesfully.",
    data: newNote,
  });
});

module.exports = app;
