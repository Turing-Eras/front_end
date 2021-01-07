import React, { useState } from 'react';

type ChangeQuestion = (index: number) => void;

type AddAnswer = (answer: string[]) => void;
type ChangeButton = (showButton: boolean) => void
type QuestionProps = {
  changeQuestion: ChangeQuestion;
  currentQuestionIndex: number;
  currentQuestion: string;
  addAnswer: AddAnswer;
  answers: string[];
  showButton :boolean;
  changeButton :ChangeButton
};

let TextQuestion = (props:QuestionProps) =>{
  const [text, updateText] = useState('')
  const [answer, saveAnswer] = useState('');

  const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    updateText(event.target.value)
    saveAnswer(event.target.value)

    
  };
  let nextButton = false
  
  return (
    <section>
      <h1>{props.currentQuestion}</h1>
      <input data-testid='text' type='text' onChange={handleChange} value = {text} ></input>
      {text !== '' && <button
        type='button'
        onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.addAnswer([...props.answers, answer]);
          props.changeButton(nextButton)
          updateText('')
        }}>
        Next
      </button>
      }
    </section>
    
  )
}
export default TextQuestion