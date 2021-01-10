import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

type ChangeQuestion = (index: number) => void;

type SetAnswer = (answer: string[]) => void;

type QuestionProps = {
  questionType: string;
  changeQuestion: ChangeQuestion;
  currentQuestionIndex: number;
  currentQuestion: string;
  setAnswer: SetAnswer;
  answers: string[];
  userid: number;
};

export const Question = (props: QuestionProps) => {
  const [date, updateDate] = useState("");
  const [endDate, updateEndDate] = useState("");
  const [answer, saveAnswer] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDate(event.target.value);
    saveAnswer(event.target.value);
  };
  let mutation;
  if (props.questionType === "event") {
    mutation = gql`
      mutation createEvent($userId: String!, $name: String!, $date: String!) {
        createUser(input: { userId: $userId, name: $name, date: $birthdate }) {
          id
          name
        }
      }
    `;
  }
  if (props.questionType === "era") {
  }
  return (
    <>
      <h1>{props.currentQuestion}</h1>
      <input
        data-testid="date"
        type="date"
        onChange={handleChange}
        value={date}
      ></input>
      {props.questionType === "event" && (
        <input
          data-testid="date"
          type="date"
          onChange={handleChange}
          value={endDate}
        ></input>
      )}
      <button
        type="button"
        onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, ""]);
          updateDate("");
        }}
      >
        Skip
      </button>
      <button
        type="button"
        onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, answer]);
          updateDate("");
        }}
      >
        Next
      </button>
    </>
  );
};
