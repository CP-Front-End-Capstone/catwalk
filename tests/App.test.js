const React = require('react');
const Enzyme = require('enzyme');
const config = require('./testconfig.js');
const App = require('../client/src/App.jsx');

const body = <App/>;

console.log("INNERHTML:",body.innerHtml);
