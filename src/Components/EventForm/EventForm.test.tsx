import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import EventForm from './EventForm';

describe('EventForm', () => {

  it('should render the component', () => {
    const { getByText } = render(
      <EventForm />
    );

    expect(true).toBe(true)
  });
});
