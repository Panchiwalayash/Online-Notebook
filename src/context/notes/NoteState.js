import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://backend-online-notes.vercel.app/";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [userDetail,setUserDetail]=useState("");
  const [alert,setAlert]=useState(null)
  
  // user signup

  const userSignup=async(name,email,password)=>{
    try {
      
      const res=await fetch(
        `${host}/api/auth/createusers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
        );
        let json=await res.json();
        if (json.success) {
          setAlert({
            message:"Your account has been created.",
            type:"success"
          })
          return true
        } else {
          setAlert({
            message:"Invalid Credential",
            type:"error"
          })
          return false;
        }
    } catch (error) {
      setAlert({
        message:"Internal error occured.",
        type:"error"
      })
    }
    }

    // user login

    const userLogin=async(email,password)=>{
      try {
        const response = await fetch(`${host}/api/auth/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  
                }, 
                body: JSON.stringify({email, password})
              });
              let json= await response.json()
              setUserDetail(json.userName)
              if(json.success===true){
                setAlert({
                  message:"Logged in successfully",
                  type:"success"
                })
                localStorage.setItem('token',json.authToken)
                return true
                
               }
                else{
                  setAlert({
                    message:"Invalid Credential",
                    type:"error"
                  })
                }
      } catch (error) {
        setAlert({
          message:"Internal error occured.",
          type:"error"
        })
      }

    }

    // get notes

    const getNotes = async () => {
      try {
        const response = await fetch(
          `${host}/api/notes/fetchallnotes`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authToken: localStorage.getItem("token"),
            },
          }
        );
        let json = await response.json();
        console.log(json)
        setNotes(json);   
      } catch (error) {
        console.log(error)
        setAlert({
          message:"Internal error occured.",
          type:"error"
        })
      }
  };

  // adding notes
  const addNote = async (title, description, tag) => {
    try {   
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken: localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      let json = await response.json();
  
      setNotes(notes.concat(json));
      setAlert({
        message:"Note had been added.",
        type:"success"
      })
    } catch (error) {
      setAlert({
        message:"Internal error occured.",
        type:"error"
      })
    }
  };

  // deleting notes
  const deleteNotes = async (noteid) => {
    try {
      await fetch(`${host}/api/notes/deletenote/${noteid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authToken: localStorage.getItem("token"),
        },
      });
      let noteindex = notes.filter((note) => {
        if (note._id !== noteid) {
          return note;
        }
      });
      setNotes(noteindex);
      setAlert({
        message:"Your Note has been deleted.",
        type:"success"
      })
      
    } catch (error) {
      setAlert({
        message:"Internal error occured.",
        type:"error"
      })
    }
  };

  //editing note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authToken: localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      let newNotes = JSON.parse(JSON.stringify(notes));
  
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
  
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
      setAlert({
        message:"Your Note has been edited",
        type:"success"
      })
    } catch (error) {
      setAlert({
        message:"Internal error occured.",
        type:"error"
      })
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes,userDetail,alert,setAlert, getNotes,userLogin, addNote,userSignup, deleteNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
