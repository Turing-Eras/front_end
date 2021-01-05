import React, { useEffect, useState } from 'react';
import Week from './Week'
const CalenderComponent = () =>{
  let calender = new Array(76)
  calender.fill({})
  console.log(calender)
  let display = calender.map(year =>{
    let weeks = new Array (52)
    weeks.fill(<Week/>)
    return weeks
  })
  return (
    <section>
      Your calender
      {display}
    </section>
  )
}
export default CalenderComponent