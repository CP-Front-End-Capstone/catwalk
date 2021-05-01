/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import { productContext } from '../../client/src/contexts/ProductContext';
import { styleContext } from '../../client/src/contexts/StyleContext';
import productData from './productData.js';
import stylesData from './stylesData.js';
import config from '../testconfig';
import App from '../../client/src/App.jsx';
import Styles from '../../client/src/widgets/overview/Styles';

describe('<Styles />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(

      <styleContext.Provider value={{
        styles: stylesData.results,
        currentStyle: stylesData.results[0],
        setStyle: () => {},
        setImage: () => {},
        curStyleInd: 0,
        setCurStyleInd: () => {},
      }}
      >
        <Styles />
      </styleContext.Provider>,

    );
  });

  it('Styles component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('displays current style name', () => {
    expect(wrapper.find('#styleName').text()).toBe('Style:  Forest Green & Black');
  });

  test('displays correct number of styles', () => {
    expect(wrapper.find('#styleList').children()).toHaveLength(6);
  });
});
