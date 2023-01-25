import React, { useContext } from 'react'
import {
  Link
} from "react-router-dom";
import noteContext from '../../context/notes/noteContext';
import './Navbar.css'

const Navbar = () => {

  const context=useContext(noteContext);
  const {setAlert} =context
  const logoutHandler=async()=>{
    localStorage.clear()
    window.location.reload()
    // setAlert({
    //   message:"You have Logged out",
    //   type:"success"
    // })
  }

  return (
    <>
      <div className='navbar'>
        <div className="nav-start"><img src="/images/logo.png" alt="" /> <span>Notebook</span></div>
        <div className="nav-mid">
          <div className="home-link"></div>
        </div>
        <div className="nav-end">
          <div className="auth-link" onClick={logoutHandler}>Logout</div>
        </div>
        
      </div>
    </>
  )
}

export default Navbar