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


// const ComfortForm = ({ item, degrees, handleItem, handleTemp, handleComfortForm, handleClearItem }) => (
//   <form className='degrees-form'>
//     <label className="clothing-label">Clothing item: </label>
//     <input
//       type='text'
//       name='item'
//       id='itemName'
//       placeholder='Name of clothing item'
//       value={item}
//       onChange={handleItem}
//     />
//     <label className='degrees-label'>Degrees Added: </label>
//     <input
//       type='number'
//       name='degrees'
//       id='degreeValue'
//       placeholder='0'
//       value={degrees}
//       onChange={handleTemp}
//     />
//     <button className='button' type='submit' onClick={handleComfortForm}>Add</button>{' '}
//     <button className='button' type='submit' onClick={handleClearItem}>Delete</button>
//   </form>
// )
