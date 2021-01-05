import React, { useEffect, useState } from 'react';
const Week = () =>{
  let handleClick = () =>{
    console.log('clicked me')
  }
  return <section onClick ={handleClick}>
    </section>
}

export default Week