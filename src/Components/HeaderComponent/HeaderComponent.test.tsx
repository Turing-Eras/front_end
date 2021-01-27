import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import HeaderComponent from './HeaderComponent';
import { BrowserRouter } from 'react-router-dom';

describe('HeaderComponent', () => {
  it('should render an header with the correct logo', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    );

    const title = getByAltText('eras logo');   
    expect(title).toBeInTheDocument();
  });
});
