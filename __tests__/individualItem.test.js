import React from 'react';
import axios from 'axios';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IndividualItem from '../client/src/components/IndividualItem';

const item = {
  _id: 10,
  name: 'test text here',
  price: 10.99,
  imageUrl: 'http://placeimg.com/640/480/transport',
  description: 'Dogs, cats, pigs',
  details: ['Handmade', 'Hipster Approved'],
  seller: 'Test shop',
  shippingStatus: 'Free shipping eligible',
}

describe('Individual Items', () => {
    test('renders IndividualItem component', () => {
      render(<IndividualItem />);
      expect(screen.getByAltText('product')).toBeInTheDocument();
    });

    test('favorites button functionality', () => {
      const favoriteButton = document.getElementById('favoriteButton');
      const favoriteHandler = jest.fn();
  
      const { getByTestId } = render(<IndividualItem item={item} onClick={favoriteHandler()} />);
      fireEvent.click(getByTestId('notFavoriteButton'));
      expect(favoriteHandler).toHaveBeenCalledTimes(1);
    });

    test('displays name for the item', () => {
      const { getByText } = render(<IndividualItem item={item} />);
      getByText('test text here');
    })
  
  });