import React from 'react'

type HandleLifeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleStartEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleEndEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleClearEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type EventProps = {
  handleLifeEvent: HandleLifeEvent;
  handleStartEvent: HandleStartEvent;
  handleEndEvent: HandleEndEvent;
  handleClearEvent: HandleClearEvent;
};


export const EventForm = ( props: EventProps ) => (


  <form>
    <label>Name of Event: </label>
    <input
      type='text'
      onChange={props.handleLifeEvent}
    />
    <label>Start Date: </label>
    <input
      type='date'
      onChange={props.handleStartEvent}
    />
    <label>End Date: </label>
    <input
      type='date'
      onChange={props.handleEndEvent}
    />
    <button type='submit'>SUBMIT</button>
  </form>
)



export default EventForm;
