import React, { useState, useEffect} from 'react'
import EventForm from '../EventForm/EventForm.js'

const Event = () => {
  const [lifeEvent, setLifeEvent] = useState('')

  const handleLifeEvent = event => {
    setLifeEvent(event.target.value)
  }

  const handleClearEvent = () => {
    setLifeEvent('')
  }

  return (
    <section>
      <h4>Add a new life event!</h4>
      <EventForm
        handleLifeEvent={handleLifeEvent}
        handleClearEvent={handleClearEvent}
      />
    </section>
  )
}
