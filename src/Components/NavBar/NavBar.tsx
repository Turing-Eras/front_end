import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

let NavBar = () =>{
  return (
    <nav>
      <img src="eras-logo-transparent.png" alt="logo" className="logo"/>
      <NavLink className ="nav-link" to="/idk">Logout</NavLink>
    </nav>
  )
}
export default NavBar
