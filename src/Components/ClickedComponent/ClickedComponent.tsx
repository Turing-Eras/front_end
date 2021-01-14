import React from 'react'
type ClickedComponentProps = {
  name: string,
  startDate: string,
  endDate: string,
}
let ClickedComponent = (props: ClickedComponentProps) =>{
  
  if(props.startDate === null || props.name === null ){
    return <p>Nothing happened here</p>
  }
  return (
    <section>
      <p>From {props.startDate} to {props.endDate} you were {props.name}</p>
      </section>
  )
}
export default ClickedComponent