import React from 'react';

type ChangeQuestion = (index: number) => void

type QuestionProps = {
  changeQuestion: ChangeQuestion;
  currentQuestionIndex: number;
  currentQuestion: string;
}


export const Question = (props: QuestionProps) => {
  return (
    <>
      <h1>{props.currentQuestion}</h1>
      <button type='button'>Skip</button>
      <button type='button' onClick={() => props.changeQuestion(props.currentQuestionIndex + 1)}>Next</button>
    </>
  );
};
