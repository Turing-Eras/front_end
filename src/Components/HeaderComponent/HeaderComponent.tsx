import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderComponent.css';
import Logo from '../../../public/eras-logo-horizontal.png'


const HeaderComponent = () =>{
  return (
      <header className='header'>
        <img src='eras-logo-horizontal.png' className='logo'/>
        <div>
        {/*<h1 className='logo-area'>ERAS</h1> */}
        </div>
        <div className='active-buttons'>
          {/* <NavLink className='login-button header-link header-text' to="/login">Login</NavLink> */}
          {/* <NavLink className='calender-button header-link header-text' to="/calender">Calendar</NavLink> */}
        </div>
      </header>
  )
}
export default HeaderComponent
