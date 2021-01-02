import React, { useEffect, useState } from 'react';
import { Question } from './Question';

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

  let questions = ['who', 'what', 'where', 'when', 'why']; //pulled in from BE
  //const [questions, setQuestions] = useState([])

  useEffect(() => {
    //set questions & store in questions variable
    //setQuestions(returnBE)
  }, []);

  const [answers, setAnswer] = useState<string[]>([]);

//   let currentQuestion: number = 0; //current index
  const [currentQuestionIndex, changeQuestion] = useState(0)

  return (
    <>
      <h1>Create My Calendar</h1>
      <form>
        <Question currentQuestion={questions[currentQuestionIndex]} changeQuestion={changeQuestion} currentQuestionIndex={currentQuestionIndex} setAnswer={setAnswer}/>
      </form>
      <button type='submit'>Submit</button>
    </>
  );
};
