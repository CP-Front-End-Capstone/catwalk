/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import * as productContext from '../../client/src/contexts/ProductContext.js';
import * as styleContext from '../../client/src/contexts/StyleContext.js';
import productData from './productData.js';
import stylesData from './stylesData.js';
import config from '../testconfig';
import App from '../../client/src/App.jsx';
import ImageGallery from '../../client/src/widgets/overview/ImageGallery';

describe('<ImageGallery />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <ImageGallery />, {
        wrappingComponent: styleContext.provider,
        wrappingComponentProps: {
          value: {
            styles: stylesData.results,
            currentStyle: stylesData.results[0],
            setStyle: () => {},
            setImage: () => {},
            curStyleInd: 0,
            setCurStyleInd: () => {},
            currentImage: stylesData.results[0].photos[0].url,
            setCurrentPhotoIndex: () => {},
            currentPhotoIndex: stylesData.results[0].photos.length,
            photosLength: 0,
          },
        },
      },
    );
  });

  it('ImageGallery component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });
});
