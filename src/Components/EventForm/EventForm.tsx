import React from 'react'


export const EventForm = () => {
  return (
    <form>
      <label>Name of Event: </label>
      <input
        type='text'
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
}
