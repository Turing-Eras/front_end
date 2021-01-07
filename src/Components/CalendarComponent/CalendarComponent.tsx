import React, { useEffect, useState } from 'react';
import Week from '../Week/Week';
import NavBar from '../NavBar/NavBar';
import './CalendarComponent.css';


const CalendarComponent = () => {
  let calendar = new Array(76);
  calendar.fill({});
  let display = calendar.map((year, index) => {
    let weeks = new Array(52);
    weeks.fill(<Week />);
    return (
      <section>
        Age: {index}
        {weeks}
      </section>
    );
  });
  return (
    <section>
      <NavBar />
      <p className='calendar-title'>Your Calendar</p>
      {display}
    </section>
  );
};
export default CalendarComponent;
