import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CalendarComponent from './CalendarComponent';

describe('CalendarComponent', () => {
  it('should render a CalendarComponent with a title', () => {
    const { getByText } = render(<CalendarComponent />);

    const title = getByText('Your calendar');  
  });
});
