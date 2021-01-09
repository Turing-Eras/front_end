import React, { useEffect, useState } from 'react';
import './Week.css';


const Week = () => {
  let handleClick = () => {
    
  };
  let [color, changeColor] = useState('red')

  const handleDragOver = (e : React.DragEvent<HTMLElement>) => {
    console.log('Ive been dragged')
    changeColor('blue')
    e.preventDefault();
    e.stopPropagation();
  }; 
  const handleDragEnter = (e :React.DragEvent<HTMLElement>) =>{
    console.log('Start dragging me')
    e.preventDefault();
    e.stopPropagation();
  }
  return <section style = {{backgroundColor: color}} className='week' onClick={handleClick} onDragEnter={e => handleDragEnter(e)}
  onDragOver = {e =>{handleDragOver(e)}}></section>;
};

export default Week;
