import React, { useContext, useEffect } from "react";
import noteContext from "../../context/notes/noteContext";
import "./noteitem.css";

const Noteitem = (props) => {
  let context = useContext(noteContext);
  let { deleteNotes } = context;

  const { note, updateNote } = props;

  return (
    <div className="note-card" >
      <div className="card-head">
        <div className="card-title">{note.title}</div>
        <div className="card-head-icon">
          <img
            src="/images/delete.png"
            className="card-head-img1"
            onClick={() => {
              deleteNotes(note._id);
            }}
          ></img>
          <img
            className="card-head-img2"
            src="/images/edit.png"
            onClick={() => {
              updateNote(note);
            }}
          ></img>
        </div>
      </div>

      <div className="card-text">{note.description}</div>
      <div className="card-tag">{note.tag?note.tag:"none"}</div> 
    </div>
  );
};

export default Noteitem;
