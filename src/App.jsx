import './App.css';
import React, { useContext, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import  Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Alert from './components/Alert/Alert';
import noteContext from './context/notes/noteContext';

function App() {
  const context=useContext(noteContext);
  const { alert  , setAlert }=context;
  const [showAlert,setShowAlert]=useState(false)

  useEffect(()=>{
    if(alert!=null){
      setShowAlert(true)
      setTimeout(() => {
        setAlert(null)
        setShowAlert(false)
      }, 2500);
    }
  },[alert])

  const hideAlert=()=>{
    setAlert(null)
    setShowAlert(false)
  }
  return (
    <div className='app'>
      { showAlert ? <Alert alert={alert} hideAlert={hideAlert}/>: null}
        <Router>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>}>
              </Route>
              <Route exact path="/login" element={<Login />}>
                
              </Route>
              <Route exact path="/signup" element={<Signup />}>
                
              </Route>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;