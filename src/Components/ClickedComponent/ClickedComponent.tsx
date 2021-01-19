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
    let endDate;
    if(props.endDate){
       endDate = updateDate(props.endDate)

    }
    let message; 
    if(endDate){
      message = `${startDate} to ${endDate}`
    }else{
      message = `On ${startDate}`
    }
  return (
    <section className = 'clickedComponent'>
      <p className = 'clickedComponentText'>{message} {props.name}</p>
      </section>
  )
}
export default ClickedComponent