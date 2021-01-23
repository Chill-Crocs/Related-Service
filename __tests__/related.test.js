import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Related from '../client/src/components/Related';


describe('Related', () => {
  test('renders the Related component', () => {
    const { queryByTestId } = render (<Related/>);
    

    expect(queryByTestId('itemsHolder')).toBeTruthy();
    expect(queryByTestId('modalHolder')).toBeTruthy();
  });
});

