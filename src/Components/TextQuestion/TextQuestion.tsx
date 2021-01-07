import React, { useState } from 'react';

type ChangeQuestion = (index: number) => void;

type SetAnswer = (answer: string[]) => void;

type QuestionProps = {
  changeQuestion: ChangeQuestion;
  currentQuestionIndex: number;
  currentQuestion: string;
  setAnswer: SetAnswer;
};

let TextQuestion = (props:QuestionProps) =>{
  const [date, updateText] = useState('')
  const [answer, saveAnswer] = useState('');

  const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    updateText(event.target.value)
    saveAnswer(event.target.value)

    
  };
  let nextButton = false
  let displayNext = () =>{
    nextButton = true
  }
  return (
    <h1>{props.currentQuestion}</h1>
    <input data-testid='date' type='date' onChange={handleChange} value = {date} onSubmit ={displayNext}></input>
    {nextButton && <button
      type='button'
      onClick={() => {
        props.changeQuestion(props.currentQuestionIndex + 1);
        props.setAnswer([...props.answers, answer]);
        updateDate('')
      }}>
      Next
    </button>
    }
  )
}
export default TextQuestion