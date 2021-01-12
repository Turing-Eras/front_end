import React from 'react'
import './EventForm.css';

type HandleLifeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleStartEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleEndEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleClearEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type ChangeDisplay = (boolean: boolean) => void;

type handleSubmit = () => void

type EventProps = {
  handleLifeEvent: HandleLifeEvent;
  handleStartEvent: HandleStartEvent;
  handleEndEvent: HandleEndEvent;
  handleClearEvent: HandleClearEvent;
  changeDisplay: ChangeDisplay;
  handleSubmit : handleSubmit
};


export const EventForm = ( props: EventProps ) => {



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
        onClick={props.handleSubmit}
      >SUBMIT</button>
    </form>
  )
}



export default EventForm;
