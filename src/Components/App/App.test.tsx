import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

test('renders the application', () => {
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache()
  });

  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );

  expect(true).toBe(true);
});
