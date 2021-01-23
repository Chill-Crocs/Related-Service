import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const randomNumber = () => Math.floor(Math.random() * (99 - 0 + 1)) + 0;

ReactDOM.render(<App selectedItem={randomNumber()} />, document.getElementById('app'));
