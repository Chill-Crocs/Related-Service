import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../client/src/components/App';
import IndividualItems from '../client/src/components/App';

describe('App', () => {
  test('renders the App component', () => {
    const { queryByTestId } = render (<App/>);
    

    expect(queryByTestId('itemsHolder')).toBeTruthy();
    expect(queryByTestId('modalHolder')).toBeTruthy();
  });
});

