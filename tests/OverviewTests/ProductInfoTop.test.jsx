/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import { productContext } from '../../client/src/contexts/ProductContext';
import { styleContext } from '../../client/src/contexts/StyleContext';
import productData from './productData';
import stylesData from './stylesData';
import config from '../testconfig';
import ProductInfoTop from '../../client/src/widgets/overview/ProductInfoTop';

describe('<ProductInfoTop />', () => {
  test('Renders proper message if state is not set', () => {
    const shallower = shallow(<ProductInfoTop />);
    expect(shallower.find('#infoLoad').text()).toBe('Product info loading...');
  });

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <productContext.Provider value={{ product: productData, totalReviews: 7 }}>
        <styleContext.Provider value={{ currentStyle: stylesData.results[0] }}>
          <ProductInfoTop />
        </styleContext.Provider>
      </productContext.Provider>,

    );
  });

  it('ProductInfoTop component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('total review count is accurate', () => {
    expect(wrapper.find('#totalReviews').text()).toBe('Read all 7 reviews');
  });

  test('displays current price', () => {
    expect(wrapper.find('#originalPrice').text()).toBe('$ 140.00');
  });

  test('displays product name', () => {
    expect(wrapper.find('#productName').text()).toBe('Camo Onesie');
  });

  test('displays product category', () => {
    expect(wrapper.find('#productCategory').text()).toBe('Jackets');
  });
});
