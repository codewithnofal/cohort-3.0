const NotesModel = require("../models/notes.model");

// CREATE
const createNotesController = async (req, res) => {
  let { title, description } = req.body;

  const newNote = await NotesModel.create({
    title,
    description,
  });

  return res.status(201).json({
    message: "notes created successfully",
    data: newNote,
  });
};

// READ ALL NOTES
const getAllNotesController = async (req, res) => {
  try {
    const getAllNotes = await NotesModel.find();

    return res.status(200).json({
      message: "all notes fetched",
      data: getAllNotes,
    });
  } catch (error) {
    return res.status(500).json("internal server error");
  }
};

// READ SINGLE NOTE
const getSingleNoteController = async (req, res) => {
  let noteId = req.params.id;

  try {
    const singleNote = await NotesModel.findById(noteId);

    return res.status(200).json({
      message: "fetched single note successfully",
      data: singleNote,
    });
  } catch (error) {
    return res.status(500).json("internal server error");
  }
};


// UPDATE
const updateNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let data = req.body;

    const notesUpdate = await NotesModel.findByIdAndUpdate(noteId, data, {new: true});

    return res.status(200).json({
      message: "note updated successfully",
      data: notesUpdate,
    });
  } catch (error) {
    return res.status(500).json("internal server error");
  }
};

// DELETE
const deleteNoteController = async (req, res) => {
    try {
        let noteId = req.params.id;
        const deleteNote = await NotesModel.findByIdAndDelete(noteId);

        return res.status(200).json({
            message: "Note deleted successfully",
            data: deleteNote
        })
    } catch (error) {
        return res.status(500).json("internal server error")
    }
}

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController
};
