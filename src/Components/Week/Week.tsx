import React, { useEffect, useState } from 'react';
import './Week.css';

type WeekProps = {
  key: number;
  index: number;
  color: string | null;
  name: string | null;
};

const Week = (props: WeekProps) => {
  let color:string | null;
  if(props.color === null){
    color = 'purple'
  }
  if(props.color === 'none'){
    color = 'red'
  }
  else{
    color = props.color
  }
  let handleClick = () => {
    console.log('you clicked', props.name)
    console.log(color)
  };
  return <section data-testid='week' style = {{backgroundColor:color}} className='week' onClick={handleClick}></section>;
};

export default Week;
