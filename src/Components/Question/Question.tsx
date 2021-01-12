import React, { useState } from 'react';
import './Question.css';

type ChangeQuestion = (index: number) => void;

type SetAnswer = (answer: string[]) => void;

type QuestionProps = {
  changeQuestion: ChangeQuestion;
  currentQuestionIndex: number;
  currentQuestion: string;
  setAnswer: SetAnswer;
  answers: string[];
};

export const Question = (props: QuestionProps) => {
  const [date, updateDate] = useState('')
  const [answer, saveAnswer] = useState('');

  const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDate(event.target.value)
    saveAnswer(event.target.value)


  };

  return (
    <>
      <p className='question'>{props.currentQuestion}</p>
      <input className='calendar-input' data-testid='date' type='date' onChange={handleChange} value = {date}></input>
      <div className='question-buttons'>
      <button className='skip-button' type='button'  onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, '']);
          updateDate('')
        }}>Skip
      </button>
      <button
        className='next-button'
        disabled={!answer}
        type='button'
        onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, answer]);
          updateDate('')
        }}>
        Next
      </button>
      </div>
    </>
  );
};
