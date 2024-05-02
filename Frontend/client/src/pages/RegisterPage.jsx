import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import "../styles/Register.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginToken } from '../redux/Slice/loginSlice';
import axios from 'axios';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('0');

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', { name, email, password, phone, role });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='heading'>Sign Up</h1>
        <form className='form' onSubmit={registerUser}>
          <input
            type='text'
            placeholder='Name'
            className='input-field'
            id='name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            className='input-field'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='input-field'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='text'
            placeholder='Phone'
            className='input-field'
            id='phone'
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            className='input-field'
            id='role'
            onChange={(e) => setRole(e.target.value)}
          >
            <option value='1'>Landlord</option>
            <option value='0'>User</option>
          </select>
          <button className='button' type='submit'>Register Now</button>
        </form>
        <div className='link-container'>
          <p>Have an account?</p>
          <Link to={'/login'}>
            <span>Sign in</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
