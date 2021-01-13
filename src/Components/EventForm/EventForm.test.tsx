import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import EventForm from './EventForm';
import { start } from 'repl';

describe('EventForm', () => {
  it('should render a form with three inputs and a button', () => {
    const { getByText } = render(<EventForm />);

    const nameLabel = getByText('Name of Era:');
    const startLabel = getByText('Start Date:');
    const endLabel = getByText('End Date:');
    const submitBtn = getByText('SUBMIT');

    expect(nameLabel).toBeInTheDocument();
    expect(startLabel).toBeInTheDocument();
    expect(endLabel).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});
