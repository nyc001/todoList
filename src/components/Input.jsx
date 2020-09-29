import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function Input(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function submit(event) {
    props.function(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function change(event) {
    const { value, name } = event.target;
    setNote({ ...note, [name]: value });
    // if (event.target.name === "title") {
    //   setNote({
    //     title: value,
    //     content: note.content,
    //   });
    // } else {
    //   setNote({
    //     title: note.title,
    //     content: value,
    //   });
    // }
  }

  return (
    <div className="inputField">
      <input
        type="text"
        name="title"
        id=""
        placeholder="Title"
        onChange={change}
        value={note.title}
      />
      <textarea
        name="content"
        id=""
        cols="36"
        rows="6"
        placeholder="Take a note..."
        onChange={change}
        value={note.content}
      ></textarea>
      <Fab type="submit" onClick={submit}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default Input;
