/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import config from './testconfig.js';
import ReviewsRatings from '../client/src/widgets/reviews/ReviewsRatings.jsx';

describe('Reviews and Ratings Widget', () => {
  it('renders without crashing', () => {
    shallow(<ReviewsRatings />);
  });
  it('renders widget title', () => {
    const wrapper = shallow(<ReviewsRatings />);
    const title = <h3>Reviews & Ratings</h3>;
    expect(wrapper.contains(title)).toEqual(true);
  });
});
