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
    color = ''
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
function areEqual(prevProps:WeekProps, nextProps: WeekProps) {
  return prevProps.name === nextProps.name
}
export default React.memo(Week,areEqual);
