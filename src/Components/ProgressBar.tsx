import React from 'react';
type ProgressProps = {
  questionsLength :number;
  answersLength: number;
};
let ProgressBar = (props :ProgressProps) =>{
  let percentage = Math.ceil(props.answersLength / props.questionsLength *100)
 return (
   <section>
   <section style={{width : percentage, backgroundColor:'red'}}>
    hello
   </section>
   </section>

 )
}
export default ProgressBar