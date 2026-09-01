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
const getSingleNoteController = async(req, res) => {
  
}


module.exports = {
  createNoteController,
  getAllNotesController,
};
