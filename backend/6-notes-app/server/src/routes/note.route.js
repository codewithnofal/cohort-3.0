const express = require("express");
const {
  createNoteController,
  getAllNotesController,
} = require("../controllers/notes.controller");

const route = express.Router();

route.post("/create", createNoteController);
route.get("/getAllNotes", getAllNotesController);

module.exports = route;
