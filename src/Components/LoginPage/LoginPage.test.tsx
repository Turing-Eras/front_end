import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('should render a form with text inputs and a button', () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const username = getByPlaceholderText('Username');
    const password = getByPlaceholderText('Password');
    const submitBtn = getByText('Submit');

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});
