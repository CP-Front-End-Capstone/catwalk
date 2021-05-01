/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import config from '../testconfig';
import NoStock from '../../client/src/widgets/overview/NoStock';

describe('<NoStock />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NoStock />);
  });

  it('NoStock component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });
});
