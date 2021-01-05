import React, { useEffect, useState } from 'react';
const Week = () =>{
  let handleClick = () =>{
    console.log('clicked me')
  }
  return (<section onClick ={handleClick}>
    I am a week
    </section>
  )
}

export default Week