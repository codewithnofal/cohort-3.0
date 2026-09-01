const express = require("express");
const {
  createNoteController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController,
} = require("../controllers/notes.controller");

const route = express.Router();

route.post("/create", createNoteController);
route.get("/getAllNotes", getAllNotesController);
route.get("/:id", getSingleNoteController);
route.put("/updateNote/:id", updateNotesController);
route.delete("/deleteNote/:id", deleteNoteController);

module.exports = route;
