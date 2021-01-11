import React, { useState } from "react";
import { DocumentNode, gql, useMutation } from "@apollo/client";

type ChangeQuestion = (index: number) => void;

type SetAnswer = (answer: string[]) => void;

type QuestionProps = {
  questionType: string;
  changeQuestion: ChangeQuestion;
  currentQuestionIndex: number;
  currentQuestion: string;
  setAnswer: SetAnswer;
  answers: string[];
  userId: number;
};

export const Question = (props: QuestionProps) => {
  const [date, updateDate] = useState("");
  const [endDate, updateEndDate] = useState("");
  const [answer, saveAnswer] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDate(event.target.value);
    saveAnswer(event.target.value);
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    updateEndDate(event.target.value)
  }
  
  let figureMutation = ():DocumentNode => { 
    let mutation:DocumentNode;
      if (props.questionType === "event") {
        mutation = gql`
          mutation createEvent($userId: ID!, $name: String!, $date: String!) {
            createEvent(input: { userId: $userId, name: $name, date: $date }){
              userId
            }
          }
        `;
      }
      if (props.questionType === "era") {
        mutation = gql`
          mutation createEra($userId :ID!, $name:String!, $startDate:String!, $endDate:String!, $color:String!){
          createEra(input :{
            userId: $userId,
            name: $name,
            startDate:$startDate,
            endDate:$endDate,
            color:$color,
          }){
            userId
            }
        }`
;
    }
    // @ts-ignore 
    return mutation
  }

  const [makeMutation, { data }] = useMutation(figureMutation());

  return (
    <>
      <h1>{props.currentQuestion}</h1>
      <input
        data-testid="date"
        type="date"
        onChange={handleChange}
        value={date}
      ></input>
      {props.questionType === "era" && (
        <input
          data-testid="date"
          type="date"
          onChange={handleEndDateChange}
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
          if (props.questionType === "event") {
            makeMutation({
              variables: {
                userId: props.userId,
                name: props.currentQuestion,
                date: date.split("-").reverse().join("-"),
              },
            });
          }
          if (props.questionType === "era") {
            makeMutation({
              variables: {
                userId: props.userId,
                name: props.currentQuestion,
                startDate: date.split("-").reverse().join("-"),
                endDate: endDate.split("-").reverse().join("-"),
                color: "purple",
              },
            });
            updateEndDate("");
          }
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
