/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import config from './testconfig.js';
import ReviewsRatings from '../client/src/widgets/reviews/ReviewsRatings.jsx';
import { productContext } from '../client/src/contexts/ProductContext.js';
import reviewContext from '../client/src/contexts/ReviewContext.js';

const reviewsMeta = {
  product_id: '18078',
  ratings: {
    1: '7',
    2: '12',
    3: '9',
    4: '11',
    5: '21',
    6: '1',
  },
  recommended: {
    false: '29',
    true: '32',
  },
  characteristics: {
    Fit: {
      id: 60618,
      value: '2.7727272727272727',
    },
    Length: {
      id: 60619,
      value: '2.8260869565217391',
    },
    Comfort: {
      id: 60620,
      value: '2.9090909090909091',
    },
    Quality: {
      id: 60621,
      value: '2.7142857142857143',
    },
  },
};
const productId = '18078';

describe('Reviews and Ratings Widget', () => {
  it('renders without crashing', () => {
    shallow(
      <productContext.Provider value={{ reviewsMeta, productId }}>
        <ReviewsRatings />
        ;
      </productContext.Provider>,
    );
  });
});
