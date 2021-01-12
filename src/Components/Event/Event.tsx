import React, { useState, useEffect} from 'react'
import EventForm from '../EventForm/EventForm'
//
const Event = () => {
  const [lifeEvent, setLifeEvent] = useState('')
  const [startEvent, setStartEvent] = useState('')
  const [endEvent, setEndEvent] = useState('')
  const [display, changeDisplay] = useState(false)

  const handleLifeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
    setLifeEvent(event.target.value)
  }

  const handleStartEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
    setStartEvent(event.target.value)
  }

  const handleEndEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEndEvent(event.target.value)
  }

  const handleClearEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
    setLifeEvent('')
  }

  const handleButtonClick = () => {
    changeDisplay(true)
  }

  return (
    <section>
    <button onClick={handleButtonClick}>Add an Era</button>
      {display && <EventForm
        handleLifeEvent={handleLifeEvent}
        handleStartEvent={handleStartEvent}
        handleEndEvent={handleEndEvent}
        handleClearEvent={handleClearEvent}
        changeDisplay={changeDisplay}
        />
      }
    </section>
  )
}



export default Event;
