import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  const [noteData, setNoteData] = useState(notes);

  function addNote(newNote) {
    newNote.key = new Date().getTime();
    setNoteData([...noteData, newNote]);
  }

  function deleteNote(id) {
    setNoteData(noteData.filter((note) => note.key !== id));
  }

  return (
    <div>
      <Header />
      <Input function={addNote} />
      {noteData.map((note) => (
        <Note info={note} key={note.key} function={deleteNote} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
