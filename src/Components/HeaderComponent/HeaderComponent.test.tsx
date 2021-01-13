import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import HeaderComponent from './HeaderComponent';
import { BrowserRouter } from 'react-router-dom';

describe('HeaderComponent', () => {
  it.skip('should render an header with the correct text', () => {
    const { getByText } = render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    );

    const title = getByText('ERAS');
    expect(title).toBeInTheDocument();
  });

  it.skip('should have a login button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    );

    const loginBtn = getByText('Login');
    expect(loginBtn).toBeInTheDocument();
  });

  it.skip('should have a calendar link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    );

    const calendarLink = getByText('Calendar');
    expect(calendarLink).toBeInTheDocument();
  });
});
