import React, { useState, useEffect} from 'react'
import EventForm from '../EventForm/EventForm'
//
const Event = () => {
  const [lifeEvent, setLifeEvent] = useState('')

  const handleLifeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
    setLifeEvent(event.target.value)
  }

  const handleClearEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
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

// const Event = () => {
//
//
//   return (
//     <section>
//       <EventForm handleLifeEvent={handleLifeEvent}/>
//     </section>
//   )
// }

export default Event;
