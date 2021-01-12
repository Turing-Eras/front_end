import React from 'react'
import './EventForm.css';

type HandleLifeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleStartEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleEndEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleClearEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type ChangeDisplay = (boolean: boolean) => void;


type EventProps = {
  handleLifeEvent: HandleLifeEvent;
  handleStartEvent: HandleStartEvent;
  handleEndEvent: HandleEndEvent;
  handleClearEvent: HandleClearEvent;
  changeDisplay: ChangeDisplay;
};


export const EventForm = ( props: EventProps ) => {

  const handleSubmit = () => {
    props.changeDisplay(false)
  }

  return (
    <form className='event-form'>
      <label>Name of Era: </label>
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
      <button
        type='submit'
        onClick={handleSubmit}
      >SUBMIT</button>
    </form>
  )
}



export default EventForm;
