import React from 'react';

type QuestionProps = {
  currentQuestion: string;
}

export const Question = (props: QuestionProps) => {
  return (
    <>
      <h1>{props.currentQuestion}</h1>
      <button type='button'>Skip</button>
      <button type='button'>Next</button>
    </>
  );
};
