import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { FormContainer } from './FormContainer';
// import { ApolloProvider, client } from '@apollo/client';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import getQuestionsQuery from './FormContainer'

describe('FormContainer', () => {
  it('should return a message if questions are loading', async () => {
    const { getByText } = render(
      <MockedProvider>
        <FormContainer />
      </MockedProvider>
    );

    const loading = getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });
});
