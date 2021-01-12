import React, { useState, useEffect} from 'react'
import EventForm from '../EventForm/EventForm'
import { DocumentNode, gql, useMutation } from "@apollo/client";
type eventProps = {
  userId: number
}
const Event = (props: eventProps) => {
    let CREATE_ERA = gql`
    mutation createEra($userId :ID!, $name:String!, $startDate:String!, $endDate:String!, $color:String!){
    createEra(input :{
      userId: $userId,
      name: $name,
      startDate:$startDate,
      endDate:$endDate,
      color:$color,
    }){
      userId
      }
  }`
  const [makeMutation, { data }] = useMutation(CREATE_ERA);

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
  const handleSubmit=() =>{
    makeMutation({
      variables: {
        userId: props.userId,
        name: lifeEvent,
        startDate: startEvent.split("-").reverse().join("-"),
        endDate: endEvent.split("-").reverse().join("-"),
      },
    });
    changeDisplay(false)
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
        handleSubmit = {handleSubmit}
        />
      }
    </section>
  )
}



export default Event;
