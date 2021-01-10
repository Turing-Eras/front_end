import React from 'react'

type HandleLifeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type HandleClearEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

type EventProps = {
  handleLifeEvent: HandleLifeEvent;
  handleClearEvent: HandleClearEvent;
};

// const [lifeEvent, setLifeEvent] = useState('')

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
    />
    <label>End Date: </label>
    <input
      type='date'
    />
    <button type='submit'>SUBMIT</button>
  </form>
)


// import React, { useState } from 'react'
//
// type HandleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => void;
//
// type EventProps = {
//   handleLifeEvent: HandleLifeEvent
// }


// export const EventForm = ( props: EventProps ) => {
//   const [lifeEvent, setLifeEvent] = useState('')
//
//   const handleLifeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
//     event.preventDefault();
//     setLifeEvent(event.target.value)
//   }
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//       Add Event:
//       <input
//         type='text'
//         value={lifeEvent}
//         onChange={handleLifeEvent}
//       />
//       </label>
//       <input type ='submit' value="Submit" />
//       <button type='submit' onClick={handleLifeEvent}></button>
//     </form>
//   )
// }

export default EventForm;
