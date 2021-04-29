/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import productContext from '../client/src/contexts/ProductContext.js';
import config from './testconfig';
import App from '../client/src/App.jsx';
import Overview from '../client/src/widgets/overview/Overview';

beforeEach(() => {
  const newWrapper = Enzyme.mount(<App />);
});

const wrapper = shallow(<Overview />);

describe('Overview Component', () => {
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
