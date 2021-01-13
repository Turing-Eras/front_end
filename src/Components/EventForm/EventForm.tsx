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
      <label>
        Name of Era:
        <input
          type='text'
          onChange={props.handleLifeEvent}
        />
      </label>
      <label>
      Start Date:
        <input
          type='date'
          onChange={props.handleStartEvent}
        />
      </label>
      <label>
      End Date:
        <input
          type='date'
          onChange={props.handleEndEvent}
        />
      </label>
      <button
        type='button'
        onClick={props.handleSubmit}
      >SUBMIT</button>
    </form>
  )
}



export default EventForm;
