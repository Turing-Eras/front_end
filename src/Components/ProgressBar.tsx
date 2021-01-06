import React from 'react';

let ProgressBar = (props) =>{
  let percentage = Math.ceil(props.anwsers / props.questions)
 return (
   <section style={{width : percentage}}>

   </section>
 )
}
export default ProgressBar