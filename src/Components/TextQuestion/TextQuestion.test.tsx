import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import TextQuestion from './TextQuestion';

describe('TextQuestion', () => {
  it('should render the current question', () => {
    const questions = [
      'What is your name?',
      'What is your birthday?',
      'What is your email address?'
    ];

    const { getByText } = render(
      <TextQuestion currentQuestion={questions[0]} />
    );

    const question = getByText('What is your name?');
    expect(question).toBeInTheDocument();
  });

  it('should render a next button', () => {
    const { getByText } = render(<TextQuestion />);

    const nextBtn = getByText('Next');
    expect(nextBtn).toBeInTheDocument();
  });
});

// it('should fire a function on click', () => {
//   const mockChangeQuestion = jest.fn();
//   const mockAddAnswer = jest.fn();
//   const { getByText } = render(
//     <MockedProvider>
//       <RequiredForm />
//       <TextQuestion
//         changeQuestion={mockChangeQuestion}
//         addAnswer={mockAddAnswer}
//       />
//     </MockedProvider>
//   );

//   const nextBtn = getByText('Next');
//   expect(nextBtn).toBeInTheDocument();
// });
//});
