import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../client/src/components/App';

describe('App', () => {
  test('renders the App component', () => {
    const { queryByTestId } = render (<App/>);

    expect(queryByTestId('itemsHolder')).toBeTruthy();
    expect(queryByTestId('modalHolder')).toBeTruthy();
  });

  // test('Updates state on Close Modal function', done => {
  //   const app = new App({ close: jest.fn() })
  //   jest.spyOn(app, 'setState').mockImplementation(function (fn) {
  //     expect(fn(this.state)).toEqual({ show: true })
  //     done()
  //   })
  //   app.closeModal()
  // })
});

