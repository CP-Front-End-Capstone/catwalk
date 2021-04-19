import App from '../client/src/App.jsx';

const React = require('react');
const Enzyme = require('enzyme');
const config = require('./testconfig.js');

const body = <App />;

console.log("INNERHTML:", body);
