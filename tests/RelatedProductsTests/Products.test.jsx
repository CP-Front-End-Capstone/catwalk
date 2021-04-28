/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import productContext from '../../client/src/contexts/ProductContext.js';
import config from '../testconfig.js';
import RelatedProducts from '../../client/src/widgets/relatedProducts/Products.jsx';

const wrapper = shallow(<RelatedProducts />);

describe('Related Products Component', () => {
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
