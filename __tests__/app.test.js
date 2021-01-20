import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../client/src/components/App';

describe('App', () => {
  test('renders the App component', () => {
    const { queryByTestId } = render (<App/>);

    expect(queryByTestId('itemsHolder')).toBeTruthy();
  });

});
