import React, { useState } from 'react';

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
      <h1>{props.currentQuestion}</h1>
      <input type='date' onChange={handleChange} value = {date}></input>
      <button type='button'  onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, '']);
          updateDate('')
        }}>Skip
      </button>
      <button
        type='button'
        onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, answer]);
          updateDate('')
        }}>
        Next
      </button>
    </>
  );
};