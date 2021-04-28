/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Overview from '../client/src/widgets/overview/Overview';

describe('Product Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('#products')).to.be(true);
  });
});
