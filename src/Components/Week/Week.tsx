import React, { useEffect, useState } from 'react';
import './Week.css';

<<<<<<< HEAD

const Week = () => {
=======
type WeekProps = {
  key: number;
  index: number;
};

const Week = (props: WeekProps) => {
>>>>>>> 1cb24fd6118617bb746aafa1e959c2cc10ecdd09
  let handleClick = () => {

  };
<<<<<<< HEAD
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
=======

  return <section className='week' onClick={handleClick}></section>;
>>>>>>> 1cb24fd6118617bb746aafa1e959c2cc10ecdd09
};

export default Week;
