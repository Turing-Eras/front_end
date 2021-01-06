import React, { useEffect, useState } from 'react';
import Week from './Week'
import NavBar from './NavBar'
const CalenderComponent = () =>{
  let calender = new Array(76)
  calender.fill({})
  console.log(calender)
  let display = calender.map((year,index )=>{
    let weeks = new Array (52)
    weeks.fill( <Week/>)
    return <section > 
      Age: {index}
      {weeks}
      </section>
  })
  return (
    <section>
      <NavBar/>
      Your calender
      {display}
    </section>
  )
}
export default CalenderComponent