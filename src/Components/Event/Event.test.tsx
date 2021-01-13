import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {
  getByTestId,
  getByText,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import Event from './Event';
import ApolloProvider from '@apollo/client';

describe('Event', () => {
  it.skip('should render a button with the correct text', () => {
    const { getByText } = render(
      <ApolloProvider>
        <Event />
      </ApolloProvider>
    );

    const addEraBtn = getByText('Add an Era');
    expect(addEraBtn).toBeInTheDocument();
  });
});
