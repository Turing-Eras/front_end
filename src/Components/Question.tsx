import React, { useState } from 'react';

type ChangeQuestion = (index: number) => void;

type SetAnswer = (answer: string[]) => void;

type QuestionProps = {
  changeQuestion: ChangeQuestion;
  currentQuestionIndex: number;
  currentQuestion: string;
  setAnswer: SetAnswer;
};

export const Question = (props: QuestionProps) => {
  const [answer, setAnswer] = useState('');

  return (
    <>
      <h1>{props.currentQuestion}</h1>
      <input type='date'></input>
      <button type='button'>Skip</button>
      <button
        type='button'
        onClick={() => props.changeQuestion(props.currentQuestionIndex + 1)}
      >
        Next
      </button>
    </>
  );
};

//Question will need local state?

//input from user will change answers
//need to update container array when user answers & clicks next
//need to update container array if user clicks skip, update answer with empty string
