import React, { ReactElement, useEffect, useState } from "react";
import { Question } from "../Question/Question";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import ProgressBar from "../ProgressBar/ProgressBar";
import { gql, useQuery } from "@apollo/client";
import { queryHelpers } from "@testing-library/react";
import './FormContainer.css';


interface FormContainer {
  useEffect: void;
}

interface Question {
  question: string;
  name: string;
  id: number;
  __typename: string;
}

export const getQuestionsQuery = gql`
  {
    getOnboardingQuestions {
      id
      question
      name
    }
  }
`;

export const FormContainer = () => {
  const [answers, setAnswer] = useState<string[]>([]);
  const [currentQuestionIndex, changeQuestion] = useState(0);

  const { loading, error, data } = useQuery(getQuestionsQuery);
  if (error) {
    return <h1>Error loading questions...</h1>;
  }
  if (loading || !data) {
    return <h1>Loading...</h1>;
  }

  let questions = data.getOnboardingQuestions;

  if (answers.length === questions.length) {
    return <button type="submit">Submit</button>;
  }

  return (
    <section>
      {answers.length === 0 && <HeaderComponent/>}
      <div>
      <p className='main-title'>Create My Calendar</p>
      </div>
      <div className='form-container'>
      <form>
        <Question
          currentQuestion={questions[currentQuestionIndex].question}
          changeQuestion={changeQuestion}
          currentQuestionIndex={currentQuestionIndex}
          setAnswer={setAnswer}
          answers={answers}
        />
      </form>
      </div>
      <div>
      {questions.length && (
        <ProgressBar
          questionsLength={questions.length}
          answersLength={answers.length}
        />)}
      </div>
    </section>
  );
};
