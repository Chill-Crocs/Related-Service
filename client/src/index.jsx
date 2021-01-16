import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const selectedItem = 0;
ReactDOM.render(<App selectedItem={selectedItem} />, document.getElementById('app'));
