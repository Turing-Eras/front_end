import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const HeaderComponent = () =>{
  return (
      <section>
        {/* <img src = ''> logo*/}
        <h1>Create My Calendar</h1>
        <button >        
          <Link to="/login">Login</Link>
        </button>
      </section>
  )
}
export default HeaderComponent