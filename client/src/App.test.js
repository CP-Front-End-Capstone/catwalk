const React = require('react');
const ReactDOM = require('react-dom');
// const App = require('./App.jsx');

test('That App renders "Hello Even Bigger Earth!"', () => {
    expect(document.getElementById('app').innerHTML).toBe('Hello Even Bigger Earth!');
  });