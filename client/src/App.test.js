const React = require('react');
const renderer = require('react-test-renderer');
const { App } = require('./App.jsx');

test('That App renders "Hello Even Bigger Earth!"', () => {
  const component = renderer.create(<App/>);
  expect(text).toBe('Hello Even Bigger Earth!');
});