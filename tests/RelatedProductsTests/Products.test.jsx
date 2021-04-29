/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import relatedProductsData from './relatedProductsData.js';
import { productContext } from '../../client/src/contexts/ProductContext.js';
import config from '../testconfig.js';
import RelatedProducts from '../../client/src/widgets/relatedProducts/Products.jsx';
import RelatedProductsList from '../../client/src/widgets/relatedProducts/RelatedProductsList.jsx';

describe('Related Products Component', () => {
  const wrapper = shallow(<RelatedProducts />);
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});

describe('Related Products List', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <productContext.Provider value={relatedProductsData.products}>
        <RelatedProductsList />
      </productContext.Provider>,
    );
  });

  it('renders without crashing', () => {
    // console.log(wrapper);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders related products list with 4 questions', () => {
    // console.log(wrapper.find('#questionlist'));
    expect(wrapper.children()).toHaveLength(4);
  });
});
