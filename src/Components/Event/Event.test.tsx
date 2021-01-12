import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import Event from './Event';

describe('Event', () => {

  it('should render the component', () => {
    const { getByText } = render(
      <Event />
    );

    expect(true).toBe(true)
  });
});
