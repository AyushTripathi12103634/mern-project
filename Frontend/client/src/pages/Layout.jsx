import React from 'react'
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import HomePage from './HomePage';

function Layout() {
  return (
    <div>
        <Navbar/>
        <HomePage/>
        <Outlet/>
    </div>
  )
}

export default Layout
