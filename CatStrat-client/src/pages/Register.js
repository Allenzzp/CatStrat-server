import React, { useEffect, useState } from "react";
import "../styles/register.scss";
import Axios from 'axios';
import cat from '../images/catbg3.png';
import { useNavigate } from 'react-router-dom';

function Register() {
  let navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUser, setRegisterUser] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerBracket, setRegisterBracket] = useState(0);
  const [loginStatus, setLoginStatus] = useState(false);

  const register = () => {
    console.log("clicked")
    Axios.post('/register', {
      email: registerEmail,
      username: registerUser, 
      password: registerPassword,
      bracket: registerBracket
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(false);
        console.log(response.data.message);
      } else {
        setLoginStatus(true);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userID', response.data.userID);
        localStorage.setItem('username', response.data.username);
      }
    })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    
    if (token && userID) {
      setLoginStatus(true)
    } 

    if (loginStatus) {
      return navigate("/dashboard")
    }
  }, [loginStatus])

  return (
    <div className="container-cat">
      <div className="catbox">
        <img id="cat" src={cat} alt="cat"/>
      </div>
      <div className="register-form">
        <h4 className="register-text">Sign Up</h4>
        <div className="center-register-form">
        <span id="span-text">Email</span>
        <input 
          type="text"
          name="email"
          placeholder="Email" 
          value={registerEmail}
          onChange={(e) => {
          setRegisterEmail(e.target.value)
        }}
        />
        <span id="span-text">Username</span>
        <input 
          type="text"
          name="username"
          placeholder="Username" 
          value={registerUser}
          onChange={(e) => {
          setRegisterUser(e.target.value)
        }}
        />
        <span id="span-text">Password</span>
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={registerPassword}
          onChange={(e) => {
          setRegisterPassword(e.target.value)
        }}
        />
        <span id="span-text">Investment Bracket</span>
        <input 
          type="text" 
          name="investment-bracket"
          placeholder="$0" 
          value={registerBracket}
          onChange={(e) => {
          setRegisterBracket(e.target.value)
        }}
        />
        <button className="buttonregid" onClick={register}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Register;