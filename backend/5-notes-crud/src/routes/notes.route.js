const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController,
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotesController);
router.get("/getAllNotes", getAllNotesController);
router.get("/:id", getSingleNoteController);
router.put('/:id', updateNotesController)
router.delete('/:id', deleteNoteController)

module.exports = router;
