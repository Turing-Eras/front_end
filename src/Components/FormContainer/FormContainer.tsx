import React, { ReactElement, useEffect, useState } from "react";
import { Question } from "../Question/Question";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import ProgressBar from "../ProgressBar/ProgressBar";
import { gql, useQuery } from "@apollo/client";
import { queryHelpers } from "@testing-library/react";

type FormContaineProps = {
  userId: number;
};

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
      event_type
    }
  }
`;

export const FormContainer = (props: FormContaineProps) => {
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
    <>
      {questions.length && (
        <ProgressBar
          questionsLength={questions.length}
          answersLength={answers.length}
        />
      )}
      {answers.length === 0 && <HeaderComponent />}
      <form>
        <Question
          questionType={questions[currentQuestionIndex].event_type}
          currentQuestion={questions[currentQuestionIndex].question}
          changeQuestion={changeQuestion}
          currentQuestionIndex={currentQuestionIndex}
          setAnswer={setAnswer}
          answers={answers}
          userId={props.userId}
        />
      </form>
    </>
  );
};
