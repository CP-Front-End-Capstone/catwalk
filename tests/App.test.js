/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// const React = require('react');
// const Enzyme = require('enzyme');
// const config = require('./testconfig.js');
// const App = require('../client/src/App.jsx');

// const body = <App/>;

// console.log("INNERHTML:",body.innerHtml);

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/src/App.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  console.log(true);
  ReactDOM.unmountComponentAtNode(div);
});
