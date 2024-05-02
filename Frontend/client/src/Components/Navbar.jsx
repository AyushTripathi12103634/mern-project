import React, { useEffect } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {jwtDecode} from 'jwt-decode';

const Navbar = () => {
  const navigate = useNavigate();

  const verifyLoginToken = () => {
    try {
      const decodedToken = jwtDecode(localStorage.getItem("token"));
      const currentTime = Date.now() / 1000;
      return decodedToken.exp >= currentTime;
    } catch (e) {
      return false;
    }
  };

  const status = verifyLoginToken();

  const [bought,setbought] = useState();

  return (
    <div className="navbar">
        <h2 className="logo">
            <span className='logoname'>Estate</span>
            <span className='logoname2'>Nest</span>
        </h2>
        <div><input type="text" placeholder="Search..." />
        <button>Q</button></div>
        
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {status === false ? (
            <>
              <Link to="/login">Sign In</Link>
              <Link to="/register">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/profile">Profile</Link>
            </>
          )}
        </div>
      </div>
  );
};

export default Navbar;
