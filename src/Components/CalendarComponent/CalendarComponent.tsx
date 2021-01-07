import React, { useEffect, useState } from 'react';
import Week from '../Week/Week';
import NavBar from '../NavBar/NavBar';

const CalendarComponent = () => {
  let calendar = new Array(76);
  calendar.fill({});
  let display = calendar.map((year, index) => {
    let weeks = new Array(52);
    weeks.fill('');
    let weeksDisplay = weeks.map((week, i) => {
      return <Week key={year + (index + 1)} index={year + (index + 1)} />;
    });
      //year + (index + 1)?
    return (
      <section key={index}>
        Age: {index}
        {weeksDisplay}
      </section>
    );
  });

  return (
    <section>
      <NavBar />
      Your calendar
      {display}
    </section>
  );
};

export default CalendarComponent;
