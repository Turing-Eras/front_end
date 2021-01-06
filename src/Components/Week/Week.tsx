import React, { useEffect, useState } from 'react';
import './Week.css';

const Week = () => {
  let handleClick = () => {
    console.log('clicked me');
  };
  return <section className='week' onClick={handleClick}></section>;
};

export default Week;
