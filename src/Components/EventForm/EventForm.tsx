import React from 'react'

// type EventProps = {
//   handleLifeEvent: HandleLifeEvent;
// }

type HandleLifeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleClearEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type EventProps = {
  handleLifeEvent: HandleLifeEvent;
  handleClearEvent: HandleClearEvent;
};

// type SetAnswer = (answer: string[]) => void;




export const EventForm = ( props: EventProps ) => (
  <form>
    <label>Name of Event: </label>
    <input
      type='text'
    />
    <label>Start Date: </label>
    <input
      type='date'
    />
    <label>End Date: </label>
    <input
      type='date'
    />
    <button type='submit'>SUBMIT</button>
  </form>
)

export default EventForm;
