import React, { useEffect, useState } from 'react';
import './Week.css';

type WeekProps = {
  key: number;
  index: number;
};

const Week = (props: WeekProps) => {
  let handleClick = () => {

  };

  return <section className='week' onClick={handleClick}></section>;
};

export default Week;
