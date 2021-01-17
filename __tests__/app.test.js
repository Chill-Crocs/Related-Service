import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../client/src/components/App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);

    expect(screen.getByText('More from this shop')).toBeInTheDocument();
    expect(screen.getByText('Other items for you')).toBeInTheDocument();
  });
});
