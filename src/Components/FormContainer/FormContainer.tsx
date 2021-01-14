import React, { ReactElement, useEffect, useState } from 'react';
import { Redirect} from "react-router-dom";
import { Question } from '../Question/Question';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ProgressBar from '../ProgressBar/ProgressBar';
import { gql, useQuery } from '@apollo/client';
import { queryHelpers } from '@testing-library/react';
import CalendarComponent from '../CalendarComponent/CalendarComponent';
import './FormContainer.css';


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
      eventType
    }
  }
`;

export const FormContainer = (props: FormContaineProps) => {
  let id = props.userId
  if(props.userId ===0 && sessionStorage.length !==0){
  //@ts-ignore
  id =JSON.parse(sessionStorage.getItem('userId'))
}
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

  if(answers.length === questions.length) {
   return <Redirect
            to={{
            pathname: "/calendar",
            state: { userId: id}
          }}
        />
    }

  return (
    <section>
      <HeaderComponent />
      <div className='form-container'>
      <form>
        <Question
          questionType={questions[currentQuestionIndex].eventType}
          currentQuestion={questions[currentQuestionIndex].question}
          questionName = {questions[currentQuestionIndex].name}
          changeQuestion={changeQuestion}
          currentQuestionIndex={currentQuestionIndex}
          setAnswer={setAnswer}
          answers={answers}
          userId={id}
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
