import React from 'react'
import './ClickedComponent.css'
type ClickedComponentProps = {
  name: string,
  startDate: string,
  endDate: string,
}
let ClickedComponent = (props: ClickedComponentProps) =>{
  console.log(props)
  
  if(props.startDate === undefined || props.name === null ){
    return <section className = 'clickedComponent'>
      <p className = 'clickedComponentText'>Nothing Happened here</p>
      </section> 
     }
     let updateDate = (date:string ) =>{
      let arr = date.split('-')
      let newArr = [arr[1],arr[2],arr[0]]
      return newArr.join('/')
    }
    let startDate = updateDate(props.startDate)
    let endDate = updateDate(props.endDate)
  return (
    <section className = 'clickedComponent'>
      <p className = 'clickedComponentText'>From {startDate} to {endDate} {props.name}</p>
      </section>
  )
}
export default ClickedComponent