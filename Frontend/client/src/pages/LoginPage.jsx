import React, { useState, useEffect } from 'react'
import "../styles/Login.css";
import Navbar from '../Components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setLoginToken } from '../redux/Slice/loginSlice';

function LoginPage() {

  const dispatch = useDispatch();
  const loginToken = useSelector(state => state.login.token);
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginuser = async (e) => {
    e.preventDefault();

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }
  
    try {
      const res = await axios.post("/auth/login", { email: email, password: password });
      if (res.data.message){
        dispatch(setLoginToken(res.data.token));
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common["Authorization"] = res.data.token;
      }
      else{
        alert("Failed to login")
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  useEffect(() => {
    if (loginToken) {
      console.log(loginToken);
      axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
      navigate("/");
    }
  }, [loginToken]);

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-form">
          <input type="email" onChange={(e)=>setemail(e.target.value)} name="email" placeholder="Enter your email" required />
          <input type="password" onChange={(e)=>setpassword(e.target.value)} name="password" placeholder="Enter your password" required />
          <button className='button' type="submit" onClick={loginuser}>Login</button>
          <div className='link-container'>
            <p>Don't have an account?</p>
            <Link to={'/register'}>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;