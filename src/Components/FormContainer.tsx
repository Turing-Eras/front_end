import React, { useEffect, useState } from 'react';

//Roles of buttons

//Next
//functions as submit

//Skip
//populates the answer with an empty string
//counts as an answer to that question for progress bar

//Back
//maybe a stretch?

export const FormContainer = () => {
  //index of question will be id

  let questions; //pulled in from BE
  useEffect(() => {
    //set questions & store in questions variable
  }, []);

  const [answers, setAnswer] = useState([]);

  let currentQuestion; //current index

  return (
    <>
      <h1>Create My Calendar</h1>
      <p>Question Goes Here</p>
      <form>
        <input type='date'></input>
      </form>
      <button type='button'>Skip</button>
      <button type='button'>Next</button>
    </>
  );
};
