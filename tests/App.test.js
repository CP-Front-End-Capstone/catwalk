/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
const React = require('react');
const Enzyme = require('enzyme');
const config = require('./testconfig.js');
const App = require('../client/src/App.jsx');

const body = <App />;

console.log('INNERHTML:', body.innerHtml);
