import React, { useState, useEffect } from "react";
import Header from "./Header";
import Input from "./Input";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import axios from "axios";
import qs from "query-string";

const apiString =
  "https://rocky-coast-11416-drumkitapp.herokuapp.com/keepers/234568";
// const apiString = "http://localhost:3001/keepers/234568";

function App() {
  // const [noteData, setNoteData] = useState(notes);
  const [noteData, setNoteData] = useState([]);

  const header = {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
  };

  function addNote(newNote) {
    // newNote.key = new Date().getTime();
    axios
      .post(apiString, qs.stringify(newNote), header)
      .then((res) => {
        setNoteData([...noteData, res.data]);
      })
      .catch((err) => console.log(err));
  }

  function deleteNote(id) {
    axios
      .delete(apiString + "/" + id.id)
      .then((res) => axios.get(apiString).then((res) => setNoteData(res.data)))
      .catch((err) => console.log(err));
    // setNoteData(noteData.filter((note) => note.key !== id));
  }

  axios.get(apiString).then((res) => setNoteData(res.data));

  return (
    <div>
      <Header />
      <Input function={addNote} />
      {noteData.map((note) => (
        <Note info={note} key={note._id} function={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
