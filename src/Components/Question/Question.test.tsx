import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByPlaceholderText, render, screen } from '@testing-library/react';
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
});
