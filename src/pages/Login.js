import React from 'react'
import {auth, provider} from "../firebase-config.js";
import { signInWithPopup} from "firebase/auth";
import {  useNavigate } from "react-router-dom";
function Login({setIsAuth}) {

  const navigate = useNavigate();

  const signIn = () =>{
    signInWithPopup(auth,provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/")
    })
  }
  return (
    <div className="loginPage">
      <p>Login with google</p>
      <button onClick={signIn}>Sign in</button>

    </div>
  )
}

export default Login