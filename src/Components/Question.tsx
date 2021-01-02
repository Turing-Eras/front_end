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
  const [answer, saveAnswer] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    saveAnswer(event.target.value);
  };

  return (
    <>
      <h1>{props.currentQuestion}</h1>
      <input type='date' onChange={handleChange}></input>
      <button type='button'>Skip</button>
      <button
        type='button'
        onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, answer]);
        }}>
        Next
      </button>
    </>
  );
};

//Question will need local state?

//input from user will change answers
//need to update container array when user answers & clicks next
//need to update container array if user clicks skip, update answer with empty string
