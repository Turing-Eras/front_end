import React, { useState} from 'react'
import EventForm from '../EventForm/EventForm'
import {gql, useMutation } from "@apollo/client";
type addEra = (era:any) => void

type era = {
  color: string | null,
  startWeek: number,
  endWeek: number,
  id: string,
  name: string,
  weekNumber: number
}
type eventProps = {
  userId: number
  newEras: era[],
  addEra: addEra
}
const Event = (props: eventProps) => {
  let id = props.userId
  if(props.userId ===0 || props.userId ===null && sessionStorage.getItem('userId') !== undefined ){
    //@ts-ignore
    id =JSON.parse(sessionStorage.getItem('userId'))
  }
    let CREATE_ERA = gql`
    mutation createEra($userId :ID!, $name:String!, $startDate:String!, $endDate:String! $color:String!){
    createEra(input :{
      userId: $userId,
      name: $name,
      startDate:$startDate,
      endDate:$endDate,
      color: $color
    }){
      userId
      name
      startWeek
      endWeek
      startDate
      endDate
      color
      }
  }`
  const [makeMutation, { data,loading,error }] = useMutation(CREATE_ERA);

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
  let [inputError,setError] = useState('')
  const handleSubmit=async () =>{
    if(Date.now() < new Date(startEvent).getTime() || Date.now() < new Date(endEvent).getTime() ){
      setError('Invalid Dates')
       return
    }
    if(new Date(startEvent).getTime() < new Date(endEvent).getTime()){
      setError('End date can can not happen before start date')
    }
    if(lifeEvent === '' || startEvent ===''|| endEvent ==='' ){
      setError('Please fill all fields')
      return
    }
    let color = Math.floor(Math.random()*16777215).toString(16);
     color = "#"+ color
    let response = await makeMutation({
      variables: {
        userId: id,
        name: lifeEvent,
        startDate: startEvent.split("-").reverse().join("-"),
        endDate: endEvent.split("-").reverse().join("-"),
        color:color
      },
    }).catch(error =>{
      return error
    });
    if(loading){
      return <p>We are trying your event</p>
    }
    if(error){
      return <p>Something went wrong</p>
    }
     
    if(response){
      console.log(response.data.createEra)
      props.addEra([...props.newEras,response.data.createEra])
      setLifeEvent('')
      setEndEvent('')
      setStartEvent('')
      changeDisplay(false)
    }

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
      {inputError && <p>{inputError}</p>}
    </section>
  )
}



export default React.memo(Event);
