import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('should render a form with text inputs and a button', () => {
    const { getByPlaceholderText, getByText } = render(<LoginPage />);
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const submitBtn = getByText('Submit');

    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('should have empty text inputs and update upon user input', () => {
    const { getByPlaceholderText } = render(<LoginPage />);

    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');

    userEvent.type(usernameInput, 'user1');
    userEvent.type(passwordInput, 'password1');

    expect(usernameInput).toHaveValue('user1');
    expect(passwordInput).toHaveValue('password1');
  });
});
