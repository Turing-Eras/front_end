import React, { useEffect, useState } from 'react';
import './Week.css';

type WeekProps = {
  key: number;
  index: number;
  color: string | null;
  name: string;
};

const Week = (props: WeekProps) => {
  let color;
  if(props.color === null){
    color = 'purple'
  }
  else{
    color = props.color
  }
  let handleClick = () => {
    console.log('you clicked', props.name)
  };

  return <section style = {{backgroundColor:color}} className='week' onClick={handleClick}></section>;
};

export default Week;
