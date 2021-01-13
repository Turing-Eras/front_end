import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import NotFound from './NotFound';

describe('AdditionalQuestions', () => {

  it('should render the component', () => {
    const { getByText } = render(
      <NotFound />
    );
    let error = getByText("You should't be here!!! 404 nothing here please go away.")
      expect(error).toBeInTheDocument()
  });
});