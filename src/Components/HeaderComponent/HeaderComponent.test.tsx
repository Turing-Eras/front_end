import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import HeaderComponent from './HeaderComponent';
import { BrowserRouter } from 'react-router-dom';

describe('HeaderComponent', () => {
  it('should render an header with the correct text', () => {
    const { getByText } = render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    );

    const title = getByText('Create My Calendar');
    expect(title).toBeInTheDocument();
  });

  it('should have a login button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    );

    const loginBtn = getByText('Login');
    expect(loginBtn).toBeInTheDocument();
  });
});
