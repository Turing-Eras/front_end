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
    color = '#a94460'
  }
  else{
    color = props.color
  }
  let handleClick = () => {

  };
    // @ts-ignore
  return <section style = {{backgroundColor:color}} className='week' onClick={handleClick}></section>;
};

export default Week;
