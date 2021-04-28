/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import config from './testconfig';
import Overview from '../client/src/widgets/overview/Overview';

describe('Overview Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('#overview')).to.be(true);
  });
});
