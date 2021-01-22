import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../client/src/components/Modal';

const item = [{
    _id: 10,
    name: 'test text here',
    price: 10.99,
    imageUrl: ['http://placeimg.com/640/480/transport', 'http://placeimg.com/640/480/transport', 'http://placeimg.com/640/480/transport'],
    description: 'Dogs, cats, pigs',
    details: ['Handmade', 'Hipster Approved'],
    seller: 'Test shop',
    shippingStatus: 'Free shipping eligible',
  }];

  const show = true;

  describe('Modal', () => {
    test('renders Modal component', () => {
      const { getByAltText } = render(<Modal show={show} />);
      expect(getByAltText('product-main')).toBeInTheDocument();
    });


    test('close button functionality', () => {
        const handleClose = jest.fn();
    
        const { getByTestId } = render(<Modal item={item} onClick={handleClose()} show={show} />);
        fireEvent.click(getByTestId('closeButton'));
        expect(handleClose).toHaveBeenCalledTimes(1);
        screen.debug;
      });

      test('displays name for the item', () => {
        const { getByText } = render(<Modal item={item} show={show}/>);
        expect(getByText('test text here')).toBeInTheDocument;
      })
});