import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Items from '../client/src/components/Items';

describe('App', () => {
    test('renders the Item component', () => {
      const { getByText } = render(<Items />);
  
      expect(getByText('More from this shop')).toBeInTheDocument();
      expect(getByText('You may also like')).toBeInTheDocument();
    });
  
  });