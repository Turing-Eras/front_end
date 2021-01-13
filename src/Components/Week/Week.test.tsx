import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Week from './Week';

describe('Week', () => {
  it('should render a Week component', () => {
    const { getByTestId } = render(<Week />);

    const week = getByTestId('week');
    expect(week).toBeInTheDocument();
  });           
});  
