import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import noteContext from '../../context/notes/noteContext';
import "./Login.css"

const Login = () => {
  const context=useContext(noteContext);
  const {userLogin}=context
  const navigate = useNavigate();
    const [credential,setCredential]=useState({email:"",password:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
       
        const result=await userLogin(credential.email,credential.password)
        if(result) navigate('/');

          }
          const onChange=(e)=>{
            setCredential({...credential,[e.target.name]:e.target.value});
          }
        
    
  return (
    <>
  <div className='login-page'>
            <div className="login-container">
                <div className="signIn">
                    <div className="signIn-head">Sign In</div>
                    {/* <div className="signIn-option">
                        <img src="/images/linkedin.png" alt="" />
                        <img src="/images/google.png" alt="" />
                        <img src="/images/facebook.png" alt="" />
                    </div> */}
                    <div className="signIn-account">
                        <form>
                            <h4> by your email account</h4>
                            <input type="email" name="email" className="signIn-email" placeholder='Email' required onChange={onChange}/>
                            <input type="password" name="password" className='signIn-password' placeholder='Password' required onChange={onChange}/>
                              <button type="submit" className='signIn-btn' onClick={handleSubmit}>Sign In</button>
                        </form>
                    </div>
                </div>
                <div className="signup-link">
                    <div className="signup-link-container">

                        <div className='signup-link-text'>Hello, Friends!</div>
                        <div className='signup-link-content'>Enter your personal details and start a journey with us</div>
                        <Link to='/signup'><button className="signup-link-btn">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Login