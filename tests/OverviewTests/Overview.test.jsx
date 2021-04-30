/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import * as productContext from '../../client/src/contexts/ProductContext.js';
import productData from './productData.js';
import config from '../testconfig';
import App from '../../client/src/App.jsx';
import Overview from '../../client/src/widgets/overview/Overview';
import ImageGallery from '../../client/src/widgets/overview/ImageGallery.jsx';

describe('<Overview />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Overview />, {
        wrappingComponent: productContext.provider,
        wrappingComponentProps: {
          value: { product: productData, productId: '18078' },
        },
      },
    );
  });

  it('Overview component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('has an Image Gallery', () => {
    expect(wrapper.children(<ImageGallery />)).toEqual(true);
  });
});
