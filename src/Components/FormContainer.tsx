import React, { useEffect, useState } from 'react';
import { Question } from './Question';

export const FormContainer = () => {
  let questions = ['who', 'what', 'where', 'when', 'why'];
  //const [questions, setQuestions] = useState([])

  useEffect(() => {
    //set questions & store in questions variable
    //setQuestions(returnBE)
  }, []);

  const [answers, setAnswer] = useState<string[]>([]);

  const [currentQuestionIndex, changeQuestion] = useState(0)

  return (
    <>
      <h1>Create My Calendar</h1>
      <form>
        <Question currentQuestion={questions[currentQuestionIndex]} changeQuestion={changeQuestion} currentQuestionIndex={currentQuestionIndex} setAnswer={setAnswer} answers={answers}/>
      </form>
      <button type='submit'>Submit</button>
    </>
  );
};
