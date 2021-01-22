import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IndividualItem from '../client/src/components/IndividualItem';

const item = {
  _id: 10,
  name: 'test text here',
  price: 10.99,
  imageUrl: ['http://placeimg.com/640/480/transport', 'http://placeimg.com/640/480/transport', 'http://placeimg.com/640/480/transport'],
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
      const favoriteHandler = jest.fn();
  
      const { getByTestId } = render(<IndividualItem item={item} onClick={favoriteHandler()} />);
      fireEvent.click(getByTestId('notFavoriteButton'));
      expect(favoriteHandler).toHaveBeenCalledTimes(1);
    });

    test('Image click for modal popup functionality', () => {
      const openModal = jest.fn();

      const { getByTestId } = render(<IndividualItem item={item} onClick={openModal()} />);
      fireEvent.click(getByTestId('openModal'));
      expect(openModal).toHaveBeenCalledTimes(1);
    })

    test('displays name for the item', () => {
      const { getByText } = render(<IndividualItem item={item} />);
      expect(getByText('test text here')).toBeInTheDocument;
    })
  
  });