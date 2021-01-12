import React from 'react'
import './AdditionalQuestions.css';


export const AdditionalQuestions = () => {
  return (
    <div>
      <h1>Answer Additional Questions</h1>
      <form>
        <label>Education</label>
        <input
          type='checkbox'
        />
        <div className='multiple-inputs'>
        <label>Graduate High School</label>
        <input
          type='text'
        />
        <input
          type='text'
        />
        </div>
        < br/>
        <label>Relationships</label>
        <input
          type='checkbox'
        />
        <input
          type='text'
        />
        < br/>
        <label>Career</label>
        <input
          type='checkbox'
        />
        <input
          type='text'
        />
        < br/>
        <label>Location</label>
        <input
          type='checkbox'
        />
        <input
          type='text'
        />
        < br/>
        <label>Other</label>
        <input
          type='checkbox'
        />
        <input
          type='text'
        />
        < br/>
      </form>
    </div>
  )
}

export default AdditionalQuestions;
