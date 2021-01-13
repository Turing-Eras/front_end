import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen } from '@testing-library/react';
import { Question } from './Question';
import { figureMutation, createEvent } from './Question';
import { MockedProvider } from '@apollo/client/testing';

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

  it('should update input when a user selects a date', () => {
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

    const testDate = '2021-01-05';
    const dateInput = getByTestId('date');

    expect(dateInput.value).toEqual('');
    fireEvent.change(dateInput, { target: { value: testDate } });

    expect(dateInput.value).toEqual(testDate);
  });

  it('should fire a function when the next button is clicked', () => {
    const mockQuestions = [
      {
        question: 'When did you graduate high school?',
        eventType: 'event'
      },
      {
        question: 'What was the start & end date of your first job?',
        eventType: 'era'
      }
    ];

    const mockChangeQ = jest.fn();
    const mockSetAnswer = jest.fn();
    const mockAnswers = [];

    const { getByTestId, getByText } = render(
      <MockedProvider mocks={[]}>
        <Question
          questionType={mockQuestions[0].eventType}
          currentQuestion={mockQuestions[0].question}
          changeQuestion={mockChangeQ}
          setAnswer={mockSetAnswer}
          answers={mockAnswers}
        />
      </MockedProvider>
    );

    const testDate = '2021-01-05';
    const nextBtn = getByText('Next');
    const dateInput = getByTestId('date');   
    const question = getByText('When did you graduate high school?');

    expect(question).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();  
    
    expect(dateInput.value).toEqual('');
    fireEvent.change(dateInput, { target: { value: testDate } });
    expect(dateInput.value).toEqual(testDate);
    userEvent.click(nextBtn);     
    
    expect(mockChangeQ).toHaveBeenCalledTimes(1);
    expect(mockSetAnswer).toHaveBeenCalledTimes(1); 
  });

  it('should fire a function when the skip button is clicked', () => {
    const mockQuestions = [
      {
        question: 'When did you graduate high school?',
        eventType: 'event'
      },
      {
        question: 'What was the start & end date of your first job?',
        eventType: 'era'
      }
    ];

    const mockChangeQ = jest.fn();
    const mockSetAnswer = jest.fn();
    const mockAnswers = [];

    const { getByTestId, getByText } = render(
      <MockedProvider mocks={[]}>
        <Question
          questionType={mockQuestions[0].eventType}
          currentQuestion={mockQuestions[0].question}
          changeQuestion={mockChangeQ}
          setAnswer={mockSetAnswer}
          answers={mockAnswers}
        />
      </MockedProvider>
    );

    const skipBtn = getByText('Skip');

    userEvent.click(skipBtn);

    expect(mockChangeQ).toHaveBeenCalledTimes(1);
    expect(mockSetAnswer).toHaveBeenCalledWith(['']);
  });
});
