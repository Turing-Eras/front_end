import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByTestId, render, screen, waitFor } from '@testing-library/react';
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

  it('should update the input when a user types', () => {
    const { getByText, getByTestId } = render(<TextQuestion />);

    const nextBtn = getByText('Next');
    const input = getByTestId('text');
    expect(input).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();

    userEvent.type(input, 'Hello');

    expect(input).toHaveValue('Hello');
  });
});
