/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import config from './testconfig.js';
import ReviewsRatings from '../client/src/widgets/reviews/ReviewsRatings.jsx';
import ReviewsList from '../client/src/widgets/reviews/ReviewsList.jsx';
import { productContext } from '../client/src/contexts/ProductContext.js';
import reviewContext from '../client/src/contexts/ReviewContext.js';
import reviewsData from './reviewsData.js';

describe('Reviews and Ratings Widget', () => {
  let wrapper;
  beforeEach(() => {
    const { productId } = reviewsData;
    const { reviewsMeta } = reviewsData;
    const { reviewsList } = reviewsData;
    wrapper = mount(
      <productContext.Provider value={{ reviewsMeta, productId }}>
        <reviewContext.Provider value={{ reviewsList }}>
          <ReviewsRatings />
        </reviewContext.Provider>
      </productContext.Provider>,
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});

describe('Reviews List', () => {
  let wrapper;
  beforeEach(() => {
    const { productId } = reviewsData;
    const { reviewsMeta } = reviewsData;
    const { reviewList } = reviewsData;
    const { reviewsArray } = reviewList.results;
    const sortBy = 'relevant';
    const setReviewList = () => {};
    const setReviewsArray = () => {};
    const setSortBy = () => {};
    wrapper = mount(
      <productContext.Provider value={{ reviewsMeta, productId }}>
        <reviewContext.Provider value={{
          reviewList, reviewsArray, setReviewList, setReviewsArray, sortBy, setSortBy,
        }}
        >
          <ReviewsList />
        </reviewContext.Provider>
      </productContext.Provider>,
    );
  });

  it('renders reviews list with 2 reviews', () => {
    expect(wrapper.find('#individualreview').children()).toHaveLength(2);
  });
});
