import React from 'react'
import './AdditionalQuestions.css';


export const AdditionalQuestions = () => {
  return (
    <div>
      <h1>Answer Additional Questions</h1>
      <form>
        <label htmlFor='education'>
          Education
          <input
            id='education'
            type='checkbox'
          />
        </label>
        <div className='multiple-inputs'>
        <label htmlFor='graduate'>
          Graduate High School
          <input
            id='graduate'
            type='text'
          />
          <input
            id='graduate'
            type='text'
          />
        </label>
        </div>
        < br/>
        <label htmlFor='relationships'>
          Relationships
          <input
            id='relationships'
            type='checkbox'
          />
          <input
            id='relationships'
            type='text'
          />
        </label>
        < br/>
        <label htmlFor='career'>
          Career
          <input
            id='career'
            type='checkbox'
          />
          <input
            id='career'
            type='text'
          />
        </label>
        < br/>
        <label htmlFor='location'>
          Location
          <input
            id='location'
            type='checkbox'
          />
          <input
            id='location'
            type='text'
          />
        </label>
        < br/>
        <label htmlFor='other'>
          Other
          <input
            id='other'
            type='checkbox'
          />
          <input
            id='other'
            type='text'
          />
        </label>
        < br/>
      </form>
    </div>
  )
}

export default AdditionalQuestions;
