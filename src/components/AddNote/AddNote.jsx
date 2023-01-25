import { React, useContext, useState } from "react";
import "./addNote.css";
import noteContext from "../../context/notes/noteContext";

const Addnote = ({ setDisplay, display }) => {
  const context = useContext(noteContext);

  // here we had did destructuring of props
  const { addNote } = context;

  const [note, setnote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
    setDisplay(!display);
  };

  return (
    <div className="addNote">
      <div className="addNote-main">
        <div className="addNote-head">Add a Note</div>
        <form className="addNote-form">
          <div className="addNote-section">
            <label htmlFor="title" className="addNote-title">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={note.title}
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={5}
            />
          </div>
          <div className="addNote-section">
            <label htmlFor="description" className="addNote-desc">
              Description:
            </label>
            <textarea
              rows={5}
              type="text"
              className="form-control"
              id="description"
              value={note.description}
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="addNote-section">
            <label htmlFor="tag" className="addNote-tag">
              Tag:
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              value={note.tag}
              name="tag"
              onChange={onChange}
            />
          </div>

          <button
            disabled={note.title.length < 3 || note.description.length < 5}
            type="submit"
            className="addNote-btn"
            onClick={handleClick}
          >
            Add 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
