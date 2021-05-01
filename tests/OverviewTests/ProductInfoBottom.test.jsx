/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import { productContext } from '../../client/src/contexts/ProductContext';
import { styleContext } from '../../client/src/contexts/StyleContext';
import productData from './productData';
import config from '../testconfig';
import stylesData from './stylesData';
import ProductInfoBottom from '../../client/src/widgets/overview/ProductInfoBottom';

describe('<ProductInfoBottom />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(

      <productContext.Provider value={{ product: productData, styles: stylesData }}>
        <ProductInfoBottom />
      </productContext.Provider>,

    );
  });

  it('ProductInfoBottom component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('displays current product slogan', () => {
    expect(wrapper.find('#productSlogan').text()).toBe('Blend in to your crowd');
  });

  test('displays current product description', () => {
    expect(wrapper.find('#productDescription').text()).toBe('The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.');
  });
});
