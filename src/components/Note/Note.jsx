import React from "react";
import "./note.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import noteContext from "../../context/notes/noteContext";
import AddNote from "../AddNote/AddNote";
import Noteitem from "../Noteitem/Noteitem";
import UpdateNote from "../UpdateNotes/UpdateNote";

const Note = () => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  // here we had did destructuring of props
  const { notes, getNotes, editNote,userDetail } = context;
  const [display, setDisplay] = useState(false);
  const [toUpdate, setToUpdate] = useState(false);
 
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const changeDisplay = () => {
    setDisplay(!display);
  };

  const updateNote = (currentNote) => {
    setToUpdate(true);
    setDisplay(false)
    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // refClose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    setToUpdate(false);
  };

  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  return (
    <div>
      <div className="updateNoteClass">
        {toUpdate && (
          <UpdateNote note={note} setToUpdate={setToUpdate} handleClick={handleClick} setnote={setnote} />
        )} 
      </div>
      <div className="updatenoteClass"></div>
      <div className={"mainContent " + (toUpdate ? "active" : "")}>
       <div className="mainContentHead"> <h2 >{`Hello ${userDetail}, welcome to Online Notebook`}</h2></div>
      <div className={"addimage"+(display ? "active" : "")}>
         <img onClick={changeDisplay} src="/images/add.png" alt="" />
      </div>
      <div className="addNotesClass">
        {display && <AddNote setDisplay={setDisplay} display={display} />}
      </div>
        <div className="note-container">
          <h2 style={{textAlign:"center"}}> Your notes</h2>
          <div className="noteSection">
            <div className="Nonote" style={{marginTop:"1vh"}}>
              {notes.length === 0 &&
                `Currently you aren't having any notes. `}
            </div>
            {notes.map((note) => {
              return (
                <Noteitem key={note._id} updateNote={updateNote} note={note}  />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
