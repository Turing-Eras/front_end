import React from 'react';
type ProgressProps = {
  questionsLength :number;
  answersLength: number;
};
let ProgressBar = (props :ProgressProps) =>{
  let percentage = Math.ceil(props.answersLength / props.questionsLength)
 return (
   <section style={{width : percentage}}>

   </section>
 )
}
export default ProgressBar