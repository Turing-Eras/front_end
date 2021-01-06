import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen } from '@testing-library/react';
import { Question } from './Question';

describe('Question', () => {
  it('should render with an input, a skip and a next button', () => {
    const { getByTestId, getByText } = render(<Question />);

    const dateInput = getByTestId('date');
    const skipBtn = getByText('Skip');
    const nextBtn = getByText('Next');

    expect(dateInput).toBeInTheDocument();
    expect(skipBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
  });

  it('should update input when a user selects a date', () => {
    const { getByTestId } = render(<Question />);

    const testDate = '2021-01-05';
    const dateInput = getByTestId('date');

    expect(dateInput.value).toEqual('');
    fireEvent.change(dateInput, { target: { value: testDate } });

    expect(dateInput.value).toEqual(testDate);
  });

  it('should clear input when next button is clicked', () => {
    const mockChangeQuestion = jest.fn();
    const testAnswers = ['', ''];
    const mockSetAnswer = jest.fn();
    const { getByTestId, getByText } = render(
      <Question
        changeQuestion={mockChangeQuestion}
        answers={testAnswers}
        setAnswer={mockSetAnswer}
      />
    );

    const testDate = '2021-01-05';
    const dateInput = getByTestId('date');
    const nextBtn = getByText('Next');

    expect(dateInput.value).toEqual('');

    fireEvent.change(dateInput, { target: { value: testDate } });
    expect(dateInput.value).toEqual(testDate);
    userEvent.click(nextBtn);

    expect(dateInput.value).toEqual('');  
  });
});
