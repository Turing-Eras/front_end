import React, { ReactElement, useEffect, useState } from 'react';
import { Question } from '../Question/Question';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ProgressBar from '../ProgressBar/ProgressBar';
import { gql, useQuery } from '@apollo/client';

interface FormContainer {
  useEffect: void;
}

interface Question {
  question: string;
  name: string;
  id: number;
  __typename: string;
}

export const FormContainer = () => {
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [answers, setAnswer] = useState<string[]>([]);
  const [currentQuestionIndex, changeQuestion] = useState(0);

  let query = gql`
    {
      getOnboardingQuestions {
        id
        question
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(query);

  let message;

  useEffect(() => {
    if (loading) {
      message = 'Loading...';
    }
    if (error) {
      message = error;
    } else if (data) {
      message = '';
      setQuestions(data.getOnboardingQuestions);
    }
  }, [data]);

  if (message || questions === undefined) {
    return <h1>{message}</h1>;
  }

  if (answers.length === questions.length) {
    return <button type='submit'>Submit</button>;
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
          currentQuestion={questions[currentQuestionIndex].question}
          changeQuestion={changeQuestion}
          currentQuestionIndex={currentQuestionIndex}
          setAnswer={setAnswer}
          answers={answers}
        />
      </form>
    </>
  );
};
