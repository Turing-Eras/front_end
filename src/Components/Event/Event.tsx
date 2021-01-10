import React, { useState, useEffect} from 'react'
import EventForm from '../EventForm/EventForm'
//
const Event = () => {
  const [lifeEvent, setLifeEvent] = useState('')
  const [startEvent, setStartEvent] = useState('')
  const [endEvent, setEndEvent] = useState('')

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

  return (
    <section>
      <h4>Add a new life event!</h4>
      <EventForm
        handleLifeEvent={handleLifeEvent}
        handleStartEvent={handleStartEvent}
        handleEndEvent={handleEndEvent}
        handleClearEvent={handleClearEvent}
      />
    </section>
  )
}



export default Event;
