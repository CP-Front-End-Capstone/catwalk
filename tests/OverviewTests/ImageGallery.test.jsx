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
import ImageGallery from '../../client/src/widgets/overview/ImageGallery';

describe('<ImageGallery />', () => {
  test('Renders proper message if state is not set', () => {
    const shallow2 = shallow(<ImageGallery />);
    expect(shallow2.find('#loadingImage').text()).toBe('Loading image...');
  });

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
        currentImage: stylesData.results[0].photos[0].url,
        setCurrentPhotoIndex: () => {},
        currentPhotoIndex: stylesData.results[0].photos.length,
        photosLength: 0,
      }}
      >
        <ImageGallery />
      </styleContext.Provider>,

    );
  });

  it('ImageGallery component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('displays correct number of images in carousel', () => {
    expect(wrapper.find('#carouselImages').children()).toHaveLength(6);
  });

  test('displays correct number of thumbnail images', () => {
    expect(wrapper.find('#thumbnails').children()).toHaveLength(6);
  });
});
