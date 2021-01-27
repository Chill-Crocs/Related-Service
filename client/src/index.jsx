import React from 'react';
import ReactDOM from 'react-dom';
import Related from './components/Related';
// eslint-disable-next-line no-unused-vars
import styles from './components/styles.css';

const randomNumber = () => Math.floor(Math.random() * (99 - 0 + 1)) + 0;

ReactDOM.render(<Related selectedItem={randomNumber()} />, document.getElementById('related'));
