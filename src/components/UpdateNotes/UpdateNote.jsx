import React, { useEffect, useState } from "react";
import "./updateNote.css";

const UpdateNote = ({ handleClick, note, setnote,setToUpdate }) => {
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const closeClick=()=>{
    setToUpdate(false)
  }
  return (
    <div className="updateNote" >
      <div className="updateNote-main">
        <div className="updateNote-head">Update Note</div>
        <form className="updateNote-form">
          <div className="updateNote-section">
            <label htmlFor="title" className="updateNote-title">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              value={note.etitle}
              onChange={onChange}
              name="etitle"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="updateNote-section">
            <label htmlFor="description" className="updateNote-desc">
              Description: 
            </label>
            <textarea
              rows={5}
              type="text"
              className="form-control"
              id="edescription"
              value={note.edescription}
              onChange={onChange}
              name="edescription"
            />
          </div>
          <div className="updateNote-section">
            <label htmlFor="tag" className="updateNote-tag">
              Tag:
            </label>
            <input
              type="text"
              className="form-control"
              id="etag"
              value={note.etag}
              onChange={onChange}
              name="etag"
            />
          </div>
          <div className="updateNote-section-btn">
          <button onClick={closeClick}>Close</button>
          <button onClick={handleClick}>Update note</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
