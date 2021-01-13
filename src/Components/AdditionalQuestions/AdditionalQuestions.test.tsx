import React, { Component } from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import AdditionalQuestions from './AdditionalQuestions';

describe('AdditionalQuestions', () => {
  it('should render the correct information', () => {
    const { getByText } = render(<AdditionalQuestions />);

    const title = getByText('Answer Additional Questions');
    const education = getByText('Education');
    const highSchool = getByText('Graduate High School');
    const relationships = getByText('Relationships');
    const career = getByText('Career');
    const location = getByText('Location');
    const other = getByText('Other');

    expect(title).toBeInTheDocument();
    expect(education).toBeInTheDocument();
    expect(highSchool).toBeInTheDocument();
    expect(relationships).toBeInTheDocument();
    expect(career).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(other).toBeInTheDocument();
  });
});
