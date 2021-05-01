/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { promisify } from 'util';
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

  test('Displays size when user clicks size selection button', () => {
    const sizeButton = promisify(() => {
      wrapper.find('#sizeButton').first().simulate('click');
    });
    sizeButton()
      .then(() => {
        expect(wrapper.find('#popItLikeItsHot').text()).toBe('XS');
      });
  });

  test('Add to Cart button displays correct phrase', () => {
    expect(wrapper.find('#addToCartButton').text()).toBe('Add To Cart');
  });

  test('Size dropdown menu displays all sizes', () => {
    const sizes = [];
    const texts = wrapper.find('#dropTop').map((node) => sizes.push(node.text()));
    expect(sizes).toBe(['XS', 'S', 'M', 'L', 'XL', 'XL']);
  });
});
