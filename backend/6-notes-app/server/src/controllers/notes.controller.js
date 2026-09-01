const { default: mongoose } = require("mongoose");
const NotesModel = require("../models/notes.model");

// CREATE NOTE
const createNoteController = async (req, res) => {
  try {
    let { title, description } = req.body;

    const newNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

// GET ALL NOTES
const getAllNotesController = async (req, res) => {
  const getAllNotes = await NotesModel.find();

  res.status(200).json({
    message: "all notes fetch successfully",
    data: getAllNotes,
  });

  try {
  } catch (error) {
    return res.status(500).json({
      message: "internel server error",
    });
  }
};

// GET SINGLE NOTE
const getSingleNoteController = async (req, res) => {
  const notesId = req.params.id;

  try {
    const singleNote = await NotesModel.findById(notesId);

    res.status(200).json({
      message: "single note fetched successfully",
      data: singleNote,
    });
  } catch (error) {
    return res.send(500).json({
      message: "internal server error",
    });
  }
};

// UPDATE NOTE
const updateNotesController = async (req, res) => {
  try {
    const notesId = req.params.id;
    let body = req.body;

    const updateNote = await NotesModel.findByIdAndUpdate(notesId, body, {
      new: true,
    });

    res.status(200).json({
      message: "note updated successfully",
      data: updateNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

const deleteNoteController = async (req, res) => {
  const id = req.params.id;

  try {
    await NotesModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports = {
  createNoteController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController,
};
