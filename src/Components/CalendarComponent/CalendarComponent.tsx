import React, { useEffect, useState } from 'react';
import Week from '../Week/Week';
import NavBar from '../NavBar/NavBar';
import { gql, useQuery } from '@apollo/client';

type CalenderComponentProps = {
  userId: number;
};
type event = {
  color: string | null;
  date: string;
  id: string;
  name: string;
  weekNumber: number;
};
type era = {
  color: string | null,
  startWeek: number,
  endWeek: number,
  id: string,
  name: string,
  weekNumber: number
}
const CalendarComponent = (props: CalenderComponentProps) => {
let id = props.userId
if(props.userId ===0 && localStorage.length !==0){
  //@ts-ignore
  id =JSON.parse(localStorage.getItem('userId'))
}  
  let Get_User = gql`
  query getUser($id :ID!){
    getUser(id:$id){
      id
      name
      events {
        id
        name
        date
        weekNumber
        color
      }
      eras {
        id
        name
        startWeek
        endWeek
        color
      }
    }
  }
`;    

const CalendarComponent = (props: CalenderComponentProps) => {
  const { data, loading, error } = useQuery(Get_User, {
    variables: { id: props.userId }
  });
  if(id=== 0){
    return <p>Please enter your name email and birthdate before you try to make a calendar</p>
  }
  if (loading) {
    return <p>Loading your Calender</p>;
  }
  if (error) {
    return <p>SOMETHING WENT WRONG</p>;
  }
  if (data) {
             
  let calendar = new Array(76);
  calendar.fill({});
  let display = calendar.map((year, index) => {
    let weeks = new Array(52);
    weeks.fill('');
    let weeksDisplay = weeks.map((week, i) => {
      let currentWeek = i + 1;
      if (index > 0) {
        currentWeek = i + 1 + index * 52;
      }
      let currentEvent = data.getUser.events.find((event: event) => {
        return event.weekNumber === currentWeek;
      });
      let currentEra = data.getUser.eras.find((era: era) => {
        if (era.startWeek >= currentWeek) {
          return true;
        }
        if (currentWeek <= era.endWeek) return false;
      });
      if (currentEvent) {
        return (
          <Week
            key={currentWeek}
            index={currentWeek}
            color={currentEvent.color}
            name={currentEvent.name}
          />
        );
      }
      if (currentEra) {
        return (
          <Week
            key={currentWeek}
            index={currentWeek}
            color={currentEra.color}
            name={currentEra.name}
          />
        );
      }
      return (
        <Week
          key={currentWeek}
          index={currentWeek}
          color={'none'}
          name={null}
        />
      );
    });

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
}}

export default CalendarComponent;
