import React from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <div>
      <NoteInput />
      <NoteList />
    </div>
  );
};

export default App;
