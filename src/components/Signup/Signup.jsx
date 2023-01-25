import "./signup.css";
import React, { useContext, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import noteContext from "../../context/notes/noteContext";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const context=useContext(noteContext)
  const { userSignup,setAlert}=context;
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credential.password !== credential.cpassword) {
      setAlert({
        message:"Password didn't matched",
        type:"error"
      })
      return null;
    } else {
      const { name, email, password} = credential;  
      let result = await userSignup(name,email,password)
      if(result) navigate("/login");
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="login-link">
          <div className="login-link-container">
            <div className="login-link-text">Welcome Back!</div>
            <div className="login-link-content">
              To keep connected with us please login with your personal info
            </div>
            <Link to="/login">
              {" "}
              <button className="login-link-btn">Sign In</button>
            </Link>
          </div>
        </div>
        <div className="signUp">
          <div className="signUp-head">Register</div>
          {/* <div className="signUp-option">
            <img src="/images/linkedin.png" alt="" />
            <img src="/images/google.png" alt="" />
            <img src="/images/facebook.png" alt="" />
          </div> */}
          <div className="signUp-account">
            <form>
              <h4>by your email account</h4>
              <input
                type="text"
                className="signUp-email"
                placeholder="Username"
                name="name"
                onChange={onChange}
                required
              />
              <input
                type="email"
                className="signUp-email"
                placeholder="Email"
                name="email"
                onChange={onChange}
                required
              />
              <input
                type="password"
                className="signUp-password"
                placeholder="Password"
                onChange={onChange}
                name="password"
                required
              />
              <input
                type="password"
                className="signUp-password"
                placeholder="Confirm Password"
                onChange={onChange}
                name="cpassword"
                required
              />
              <div className="Register">
                <button
                  type="submit"
                  className="signUp-btn"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
