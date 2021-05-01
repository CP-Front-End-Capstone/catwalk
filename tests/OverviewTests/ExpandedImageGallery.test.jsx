/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import { productContext } from '../../client/src/contexts/ProductContext';
import { styleContext } from '../../client/src/contexts/StyleContext';
import productData from './productData.js';
import stylesData from './stylesData.js';
import config from '../testconfig';
import App from '../../client/src/App.jsx';
import ExpandedImageGallery from '../../client/src/widgets/overview/ExpandedImageGallery';

describe('<ExpandedImageGallery />', () => {
  test('Renders proper message if state is not set', () => {
    const shallow1 = shallow(<ExpandedImageGallery />);
    expect(shallow1.find('#loadingExpImage').text()).toBe('Loading image...');
  });

  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <styleContext.Provider value={{
        styles: stylesData.results,
        currentStyle: stylesData.results[0],
        setStyle: () => {},
        setImage: () => {},
        imageView: false,
        setImageView: () => {},
        currentImage: stylesData.results[0].photos[0].url,
        setCurrentPhotoIndex: () => {},
        currentPhotoIndex: stylesData.results[0].photos.length,
        photosLength: 0,
      }}
      >
        <ExpandedImageGallery />
      </styleContext.Provider>,
    );
  });

  it('ExpandedImageGallery component does not crash', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('displays correct number of images in expanded carousel', () => {
    expect(wrapper.find('#expCarouselImages').children()).toHaveLength(6);
  });

  test('displays correct number of icons', () => {
    expect(wrapper.find('#icons').children()).toHaveLength(6);
  });
});
