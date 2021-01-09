import React, { useEffect, useState } from 'react';
import Week from '../Week/Week';
import NavBar from '../NavBar/NavBar';
import Event from '../Event/Event'
import './CalendarComponent.css';
import AdditionalQuestions from '../AdditionalQuestions/AdditionalQuestions'


const CalendarComponent = () => {
  let calendar = new Array(76);
  calendar.fill({});
  let display = calendar.map((year, index) => {
    let weeks = new Array(52);
    weeks.fill(<Week />);
    return (
      <>
      <section>
        Age: {index}
        {weeks}
      </section>
      </>
    );
  });
  return (
    <section>
      <NavBar />
      <h1 className='calendar-title'>Your Calendar</h1>
      <button>Add an event</button>
        <Event />
      <p className='week-title'>Weeks</p>
      <div className='calendar-area'>
      {display}
      </div>
      <section>
      <AdditionalQuestions />
      </section>
    </section>
  );
};
export default CalendarComponent;
