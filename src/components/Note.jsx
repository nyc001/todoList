import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function deleteNote() {
    props.function(props.info.key);
  }

  return (
    <div className="note">
      <h1>{props.info.title}</h1>
      <p>{props.info.content} </p>
      <button type="submit" onClick={deleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
