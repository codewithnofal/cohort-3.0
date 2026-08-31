const NotesModel = require("../models/notes.model");

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

module.exports = {
  createNotesController,
};
