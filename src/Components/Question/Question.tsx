import React, { useState } from "react";
import { DocumentNode, gql, useMutation } from "@apollo/client";
import './Question.css'
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

export const figureMutation = (questionType: string):DocumentNode => { 
  let mutation:DocumentNode;
    if (questionType === "event") {
      mutation = gql`
          mutation createEvent($userId: ID!, $name: String!, $date: String!, $color: String!) {
            createEvent(input: { userId: $userId, name: $name, date: $date, color: $color }){
              userId
              color
            }
          }
      `;
    }
    if (questionType === "era") {
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
          color
          }
      }`
;
  }
  // @ts-ignore 
  return mutation
}

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

  const [makeMutation] = useMutation(figureMutation(props.questionType));

  return (
    <>
      <p className='question'>{props.currentQuestion}</p>
      <label>
        <input
          className='calendar-input'
          data-testid="date"
          type="date"
          onChange={handleChange}
          value={date}
        />
      </label>
      <label>
        {props.questionType === "era" && (
        <input
          className='calendar-input'
          data-testid="date"
          type="date"
          onChange={handleEndDateChange}
          value={endDate}
        />
      )}
      </label>
      <div className='question-buttons'>
      <button
        type="button"
        className = 'skip-button'
        onClick={() => {
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, ""]);
          updateDate("");
          saveAnswer('')
        }}
      >
        Skip
      </button>
      <button
        type="button"
        className='next-button'
        disabled={!answer ? true: false}
        onClick={() => {
          if (props.questionType === "event") {
            makeMutation({
              variables: {
                userId: props.userId,
                name: props.currentQuestion,
                date: date.split("-").reverse().join("-"),
                color:'',
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
                color: '',
              },
            });
            updateEndDate("");
          }
          props.changeQuestion(props.currentQuestionIndex + 1);
          props.setAnswer([...props.answers, answer]);
          updateDate("");
          saveAnswer('')

        }}
      >
        Next
      </button>
      </div>
    </>
  );
};
