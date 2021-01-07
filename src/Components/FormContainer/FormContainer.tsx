import React, { useEffect, useState } from 'react';
import { Question } from '../Question/Question';
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import ProgressBar from '../ProgressBar/ProgressBar'
export const FormContainer = () => {
  let questions = ['who', 'what', 'where', 'when', 'why'];
  //const [questions, setQuestions] = useState([])

  useEffect(() => {
    //set questions & store in questions variable
    //setQuestions(returnBE)
  }, []);

  const [answers, setAnswer] = useState<string[]>([]);

  const [currentQuestionIndex, changeQuestion] = useState(0)
  if(answers.length === questions.length ){
    return <button type='submit'>Submit</button>

  }
  return (
    <>
    <ProgressBar questionsLength = {questions.length} answersLength ={answers.length}/>
      {answers.length === 0 && <HeaderComponent/>}
      <form>
        <Question currentQuestion={questions[currentQuestionIndex]} changeQuestion={changeQuestion} currentQuestionIndex={currentQuestionIndex} setAnswer={setAnswer} answers={answers}/>
      </form>
    </>
  );
};
