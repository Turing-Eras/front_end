import React, { useEffect, useState } from 'react';
import Week from '../Week/Week';
import Event from '../Event/Event'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import './CalendarComponent.css';
import AdditionalQuestions from '../AdditionalQuestions/AdditionalQuestions'
import ClickedComponent from '../ClickedComponent/ClickedComponent'
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
  startDate:string
  endDate:string
}
export const Get_User = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      currentWeek
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
        startDate
        endDate
        color
      }
    }
  }
`;

const CalendarComponent = (props: CalenderComponentProps) => {

  let [newEras, addEra] = useState <era[]>([])
  let [weekClicked ,clickWeek] = useState(false)
  let [currentWeekClicked,upDateWeekClicked] = useState<any>({})
  let id = props.userId
  if(props.userId ===0 || props.userId ===null && sessionStorage.getItem('userId') !== undefined ){
    //@ts-ignore
    id =JSON.parse(sessionStorage.getItem('userId'))
  }

  const { data, loading, error } = useQuery(Get_User, {
    variables: { id: id }
  });
  if(error && !id ){
    return <p>Please make a user before trying to make a calendar</p>
  }
  if (loading) {
    return <p>Loading your Calender</p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }


  let calendar = new Array(90);
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
      let currentNewEra = newEras.find((era: era) =>{
        if (currentWeek > era.endWeek) return false;

        if (era.startWeek <= currentWeek) {
          return true;
        }
      })
      let currentEra = data.getUser.eras.find((era: era) => {
        if (currentWeek > era.endWeek) return false;

        if (era.startWeek <= currentWeek) {
          return true;
        }
      });
      if(currentNewEra){
        return (
          <Week
            startDate = {currentNewEra.startDate}
            endDate = {currentNewEra.endDate}
            upDateWeekClicked = {upDateWeekClicked}
            clickWeek = {clickWeek}
            key={currentWeek}
            index={currentWeek}
            color={currentNewEra.color}
            name={currentNewEra.name}
          />
        );
      }
      if (currentEvent) {
        return (
          <Week
           startDate = {currentEvent.date}
            upDateWeekClicked = {upDateWeekClicked}
            clickWeek = {clickWeek}
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
            startDate = {currentEra.startDate}
            endDate = {currentEra.endDate}
            upDateWeekClicked = {upDateWeekClicked}
            clickWeek = {clickWeek}
            key={currentWeek}
            index={currentWeek}
            color={currentEra.color}
            name={currentEra.name}
          />
        );
      }
      if(data.getUser.currentWeek <= currentWeek){
       return( <Week
          upDateWeekClicked = {upDateWeekClicked}
          clickWeek = {clickWeek}
          key={currentWeek}
          index={currentWeek}
          color={'white'}
          name={null}
        />
      )
     }

      return (
        <Week
          upDateWeekClicked = {upDateWeekClicked}
          clickWeek = {clickWeek}
          key={currentWeek}
          index={currentWeek}
          color={'none'}
          name={null}
        />
      );
    });

    if (index < 10 ) {
      //@ts-ignore
      index = '0' + index
    }

    return (
      <section className='weeks-display' key={index}>
        Age: {index}
        {weeksDisplay}
      </section>
    );
  });

  return (
    <section>
      <HeaderComponent />
      <h1 className='calendar-title'>Your Calendar</h1>
        <Event userId = {props.userId} newEras = {newEras} addEra = {addEra} />
          {weekClicked && <ClickedComponent name ={currentWeekClicked.name} startDate = {currentWeekClicked.startDate} endDate = {currentWeekClicked.endDate}/>}
      <p className='week-title'>Weeks</p>
      <div className='calendar-area'>
      {display}
      </div>
    </section>
  );
};


export default CalendarComponent;
