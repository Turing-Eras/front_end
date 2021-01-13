import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByTestId, render, screen, waitFor } from '@testing-library/react';
import FormStartPage from './FormStartPage';
import { BrowserRouter } from 'react-router-dom';

describe('FormStartPage', () => {
  it('should render a FormStartPage with instructions', () => {
    const mockUpdateUser = jest.fn();

    const { getByText } = render(
      <BrowserRouter>
        <FormStartPage updateUserId={mockUpdateUser} />
      </BrowserRouter>
    );

    const instructions = getByText(
      "As you know life is filled with choices. We've decided to give you another. You can start off editing a blank calendar by selecting 'Start Calendar' or you can select 'Start Form' to answer a few questions that will create events for you. You can add more events later if you choose!"
    );

    expect(instructions).toBeInTheDocument();
  });

  it('should display Start Calendar and Start Form buttons', () => {
    const mockUpdateUser = jest.fn();

    const { getByText } = render(
      <BrowserRouter>
        <FormStartPage updateUserId={mockUpdateUser} />
      </BrowserRouter>
    );

    const startCalendarBtn = getByText('Start Calendar');
    const startFormBtn = getByText('Start Form');

    expect(startCalendarBtn).toBeInTheDocument();
    expect(startFormBtn).toBeInTheDocument();
  });  
});
