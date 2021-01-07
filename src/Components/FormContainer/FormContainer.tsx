import React, { ReactElement, useEffect, useState } from 'react';
import { Question } from '../Question/Question';
import { gql, useQuery } from '@apollo/client';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

interface FormContainer {
  useEffect: void;
}

export const FormContainer = () => {
  // let questions = ['who', 'what', 'where', 'when', 'why'];
  //const [questions, setQuestions] = useState([])

  const [questions, setState] = React.useState([]);

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
    }
    // do some checking here to ensure data exist
    else if (data) {
      message = '';
      // mutate data if you need to
      console.log(data);
      setState(data);
    }
  }, [data]);

  const [answers, setAnswer] = useState<string[]>([]);

  const [currentQuestionIndex, changeQuestion] = useState(0);

  if (message) {
    return <h1>{message}</h1>;
  }

  if (answers.length === questions.length) {
    return <button type='submit'>Submit</button>;
  }

  return (
    <>
      {answers.length === 0 && <HeaderComponent />}
      <form>
        <Question
          currentQuestion={questions[currentQuestionIndex]}
          changeQuestion={changeQuestion}
          currentQuestionIndex={currentQuestionIndex}
          setAnswer={setAnswer}
          answers={answers}
        />
      </form>
    </>
  );
};
