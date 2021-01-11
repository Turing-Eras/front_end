import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen } from '@testing-library/react';
import { Question } from './Question';
import { figureMutation, createEvent } from './Question';
import { MockedProvider } from '@apollo/client/testing';

// import TestRenderer from 'react-test-renderer';
import { DocumentNode, gql, useMutation } from "@apollo/client";

const mocks = [   
  {
    request: {
      query: figureMutation,
      variables: { userId: 1, name: 'HS Graduation', date: '20/05/2006' }
    },
    result: {
      data: {
        createEvent: {
          userId: '1',
          name: 'HS Graduation'
        }
      }
    }
  }
];

describe('Question', () => {
  it('should render with an input, a skip and a next button', () => {
    const questions = [
      {
        question: 'When did you graduate high school?',
        eventType: 'event'   
      },
      {
        question: 'What was the start & end date of your first job?',
        eventType: 'era'
      }
    ];

    const { getByTestId, getByText } = render(
      <MockedProvider mocks={[]}>          
        <Question questionType={questions[0].eventType} />
      </MockedProvider>
    );

    const dateInput = getByTestId('date');
    const skipBtn = getByText('Skip');
    const nextBtn = getByText('Next');

    expect(dateInput).toBeInTheDocument();
    expect(skipBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
  });

  it('should display the current question', () => {
    const questions = [
      {
        question: 'When did you graduate high school?',
        eventType: 'event'   
      },
      {
        question: 'What was the start & end date of your first job?',
        eventType: 'era'
      }
    ];

    const { getByTestId, getByText } = render(
      <MockedProvider mocks={[]}>          
        <Question 
          questionType={questions[0].eventType} 
          currentQuestion={questions[0].question}    
        />
      </MockedProvider>
    );          

    const question = getByText('When did you graduate high school?');

    expect(question).toBeInTheDocument();
  });       

  // it('should update input when a user selects a date', () => {
  //   const { getByTestId } = render(<Question />);

  //   const testDate = '2021-01-05';
  //   const dateInput = getByTestId('date');

  //   expect(dateInput.value).toEqual('');
  //   fireEvent.change(dateInput, { target: { value: testDate } });

  //   expect(dateInput.value).toEqual(testDate);
  // });

  // it('should clear input when next button is clicked', () => {
  //   const mockChangeQuestion = jest.fn();
  //   const testAnswers = ['', ''];
  //   const mockSetAnswer = jest.fn();
  //   const { getByTestId, getByText } = render(
  //     <Question
  //       changeQuestion={mockChangeQuestion}
  //       answers={testAnswers}
  //       setAnswer={mockSetAnswer}
  //     />
  //   );

  //   const testDate = '2021-01-05';
  //   const dateInput = getByTestId('date');
  //   const nextBtn = getByText('Next');

  //   expect(dateInput.value).toEqual('');

  //   fireEvent.change(dateInput, { target: { value: testDate } });
  //   expect(dateInput.value).toEqual(testDate);
  //   userEvent.click(nextBtn);

  //   expect(dateInput.value).toEqual('');
  // });

  // it('should fire a function when the next button is clicked', () => {
  //   const mockQuestions = [
  //     'What is your birthday?',
  //     'When did you graduate High School?'
  //   ];
  //   const mockCurrIndex = 0;
  //   const mockChangeQ = jest.fn();
  //   const mockAnswers = [];
  //   const mockSetAnswer = jest.fn();
  //   const { getByText } = render(
  //     <Question
  //       currentQuestion={mockQuestions[mockCurrIndex]}
  //       changeQuestion={mockChangeQ}
  //       answers={mockAnswers}
  //       setAnswer={mockSetAnswer}
  //     />
  //   );

  //   const nextBtn = getByText('Next');
  //   const question = getByText('What is your birthday?');
  //   expect(question).toBeInTheDocument();

  //   userEvent.click(nextBtn);

  //   expect(mockChangeQ).toHaveBeenCalledTimes(1);
  //   expect(mockSetAnswer).toHaveBeenCalledTimes(1);
  // });

  // it('should fire a function when the skip button is clicked', () => {
  //   const mockChangeQ = jest.fn();
  //   const mockAnswers = [];
  //   const mockSetAnswer = jest.fn();
  //   const { getByText } = render(
  //     <Question
  //       changeQuestion={mockChangeQ}
  //       answers={mockAnswers}
  //       setAnswer={mockSetAnswer}
  //     />
  //   );

  //   const skipBtn = getByText('Skip');

  //   userEvent.click(skipBtn);

  //   expect(mockChangeQ).toHaveBeenCalledTimes(1);
  //   expect(mockSetAnswer).toHaveBeenCalledWith(['']);
  // });
});
