import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import CalendarComponent from './CalendarComponent';
import { MockedProvider } from '@apollo/client/testing';
import { Get_User } from './CalendarComponent';     

const mocks = [
  {
    request: {
      query: Get_User,   
      variables: { id: 1 }
    },
    result: {
      data: {
        getUser: {
          id: '1',
          name: 'Frosty',
          events: [
            {
              id: '1',
              name: 'HS Graduation',
              date: '1990-09-21',
              weekNumber: -542,
              color: null
            }
          ],
          eras: [
            {
              id: '1',
              name: 'childhood',
              startWeek: 296,
              endWeek: 343,
              color: '#ED3DC9'
            }
          ]
        }
      }
    }
  }
];

describe('CalendarComponent', () => {
  it('should render a CalendarComponent with a title and ages', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks}>      
        <CalendarComponent userId={1}/>     
      </MockedProvider>
    );              

    const title = await waitFor(() => getByText('Your Calendar'))
    const age00 = await waitFor(() => getByText('Age: 00'))
    const age30 = await waitFor(() => getByText('Age: 30'))
    const age60 = await waitFor(() => getByText('Age: 60'))
   
    expect(title).toBeInTheDocument();
    expect(age00).toBeInTheDocument();
    expect(age30).toBeInTheDocument();
    expect(age60).toBeInTheDocument();      
  });      
});    
