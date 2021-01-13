import React from 'react'
import './AdditionalQuestions.css';


export const AdditionalQuestions = () => {
  return (
    <div>
      <h1>Answer Additional Questions</h1>
      <form>
        <label>
          Education
          <input
            type='checkbox'
          />
        </label>
        <div className='multiple-inputs'>
        <label>
          Graduate High School
          <input
            type='text'
          />
          <input
            type='text'
          />
        </label>
        </div>
        < br/>
        <label>
          Relationships
          <input
            type='checkbox'
          />
          <input
            type='text'
          />
        </label>
        < br/>
        <label>
          Career
          <input
            type='checkbox'
          />
          <input
            type='text'
          />
        </label>
        < br/>
        <label>Location
          <input
            type='checkbox'
          />
          <input
            type='text'
          />
        </label>
        < br/>
        <label>Other
          <input
            type='checkbox'
          />
          <input
            type='text'
          />
        </label>
        < br/>
      </form>
    </div>
  )
}

export default AdditionalQuestions;
