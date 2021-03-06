import React, { useState } from 'react';

type ChangeQuestion = (index: number) => void;

type AddAnswer = (answer: string[]) => void;
type QuestionProps = {
  changeQuestion: ChangeQuestion;
  currentQuestionIndex: number;
  currentQuestion: string;
  addAnswer: AddAnswer;
  answers: string[];
};

let TextQuestion = (props: QuestionProps) => {
  const [text, updateText] = useState('');
  const [answer, saveAnswer] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateText(event.target.value);
    saveAnswer(event.target.value);
  };
  
  let type = 'text';
  if (props.currentQuestionIndex === 1) {
    type = 'date';
  }
  return (
    <section>
      <h1>{props.currentQuestion}</h1>
      <label>
        <input tabIndex ={1} data-testid='text' type={type} onChange={handleChange} value = {text} />
      </label>
      <div tabIndex ={2} >
       <button 
        type='button'
        disabled={!text ? true: false}
        onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.addAnswer([...props.answers, answer]);
          updateText('')
          saveAnswer('')
        }}>
        Next
      </button>
      </div>
    </section>
  )
}
export default TextQuestion
