import React from 'react';
import './Week.css';
type upDateWeekClicked = (object: any) => void
type clickWeek = (bool: boolean) => void
type WeekProps = {
  key: number;
  index: number;
  color: string | null;  
  name: string | null;
  upDateWeekClicked :upDateWeekClicked;
  clickWeek: clickWeek
  startDate?: string,
  endDate?: string};

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
    let handleClick = () =>{
      props.clickWeek(true)
      props.upDateWeekClicked({
        name:props.name,
        startDate:props.startDate,
        endDate: props.endDate
      })
    }
    
      // @ts-ignore
    return <section data-testid='week' onClick = {handleClick}style = {{backgroundColor:color}} className='week' ></section>;
};
function areEqual(prevProps:WeekProps, nextProps: WeekProps) {
  return prevProps.name === nextProps.name
}
export default React.memo(Week,areEqual);   
   