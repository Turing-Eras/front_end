import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('should render a ProgressBar', () => {
    const { container } = render(
      <ProgressBar questionsLength={2} answersLength={1} />
    );
    expect(container.firstChild.classList.contains('progress-bar'));
  });
});  
