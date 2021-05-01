/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import { productContext } from '../../client/src/contexts/ProductContext';
import { styleContext } from '../../client/src/contexts/StyleContext';
import productData from './productData';
import config from '../testconfig';
import stylesData from './stylesData';
import AddToCart from '../../client/src/widgets/overview/AddToCart';

describe('<AddToCart />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <productContext.Provider value={{ productId: '18078' }}>
        <styleContext.Provider value={{ currentStyle: stylesData.results[0] }}>
          <AddToCart />
        </styleContext.Provider>
      </productContext.Provider>,

    );
  });

  it('Add To Cart component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('Size selection dropdown displays correct phrase', () => {
    expect(wrapper.find('#popItLikeItsHot').text()).toBe('Select Size');
  });

  test('displays correct number of sizes in size selection dropdown menu', () => {
    expect(wrapper.find('#dropTop').children()).toHaveLength(6);
  });

  test('Quantity selection dropdown displays correct phrase', () => {
    expect(wrapper.find('#dropdownMenu2').text()).toBe('____');
  });

  test('Add to Cart button displays correct phrase', () => {
    expect(wrapper.find('#addToCartButton').text()).toBe('Add To Cart');
  });
});
