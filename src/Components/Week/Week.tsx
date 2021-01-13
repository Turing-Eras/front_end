import React from 'react';
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
      color = 'red'
    }
    if(props.color === 'none'){
      color = '#a94460'
    }
    else{
      color = props.color
    }
    
      // @ts-ignore
    return <section data-testid='week' style = {{backgroundColor:color}} className='week' ></section>;
};
function areEqual(prevProps:WeekProps, nextProps: WeekProps) {
  return prevProps.name === nextProps.name
}
export default React.memo(Week,areEqual);   
   