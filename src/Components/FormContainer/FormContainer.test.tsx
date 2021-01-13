import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { FormContainer } from './FormContainer';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { getQuestionsQuery } from './FormContainer';

describe('FormContainer', () => {
  it('should return a message if questions are loading', () => {
    const { getByText } = render(
      <MockedProvider>
        <FormContainer />
      </MockedProvider>
    );

    const loading = getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });

  it('should display an error message if an error occurs', async () => {
    const errorMock = [
      {
        request: {
          query: getQuestionsQuery
        },
        error: new Error('Something went wrong!')
      }
    ];

    const { getByText } = render(
      <MockedProvider mocks={errorMock}>
        <FormContainer />
      </MockedProvider>
    );

    const errorMsg = await waitFor(() =>
      getByText('Error loading questions...')
    );
    expect(errorMsg).toBeInTheDocument();
  });
});
