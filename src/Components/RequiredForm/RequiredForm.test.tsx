import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import RequiredForm from './RequiredForm';
import FormStartPage from '../FormStartPage/FormStartPage';
import { MockedProvider } from '@apollo/client/testing';

describe('RequiredForm', () => {
  it('should render a RequiredForm with instructions for the user', () => {
    const { getByText } = render(
      <MockedProvider>
        <RequiredForm />
      </MockedProvider>
    );

    const userInstructions = getByText(
      'Welcome to Eras, the life calendar. Eras allows you to holistically visualize your life in order to live more intentionally. The form will ask you a few questions in order to get to know you and generate your life calendar! Lets start!'
    );

    expect(userInstructions).toBeInTheDocument();
  });

  it('should render a question', () => {
    const { getByText } = render(
      <MockedProvider>
        <RequiredForm />
      </MockedProvider>
    );

    const nameQuestion = getByText('What is your name?');
    expect(nameQuestion).toBeInTheDocument();
  });

  it('should render with a next button', () => {
    const { getByText } = render(
      <MockedProvider>
        <RequiredForm />
      </MockedProvider>
    );

    const nextBtn = getByText('Next');
    expect(nextBtn).toBeInTheDocument();
  });
});
