import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import AdditionalQuestions from './AdditionalQuestions';

describe('AdditionalQuestions', () => {

  it('should render the component', () => {
    const { getByText } = render(
      <AdditionalQuestions />
    );

    expect(true).toBe(true)
  });
});
