import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CalendarComponent from './CalendarComponent';

describe('CalendarComponent', () => {
  it('should render a CalendarComponent with a title and ages', () => {
    const { getByText } = render(<CalendarComponent />);

    const title = getByText('Your calendar');
    const age0 = getByText('Age: 0');
    const age30 = getByText('Age: 30');
    const age60 = getByText('Age: 60');

    expect(title).toBeInTheDocument();
    expect(age0).toBeInTheDocument();
    expect(age30).toBeInTheDocument();
    expect(age60).toBeInTheDocument();
  });     
});
