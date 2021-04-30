/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from 'react';
import { shallow, mount } from 'enzyme';
import relatedProductsData from './relatedProductsData.js';
import config from '../testconfig.js';
import RelatedProducts from '../../client/src/widgets/relatedProducts/Products.jsx';
import RelatedProductsList from '../../client/src/widgets/relatedProducts/RelatedProductsList.jsx';
import RelatedProductsCard from '../../client/src/widgets/relatedProducts/RelatedProductsCard.jsx';
import ComparisonModal from '../../client/src/widgets/relatedProducts/ComparisonModal.jsx';

describe('Related Products Component', () => {
  const wrapper = shallow(<RelatedProducts />);
  it('Renders Products Component', () => {
    expect(wrapper).toHaveLength(1);
  });
});

describe('Related Products List', () => {
  let listWrapper;
  beforeEach(() => {
    const { products } = relatedProductsData;
    const { styles } = relatedProductsData;
    const { rating } = relatedProductsData;
    const calculateAverage = () => {};
    listWrapper = mount(
      <RelatedProductsList
        products={products}
        styles={styles}
        rating={rating}
        calculateAverage={calculateAverage}
      />,
    );
  });

  it('Renders Related Products Component', () => {
    expect(listWrapper).toHaveLength(1);
  });

  it('renders related products list with 4 questions', () => {
    expect(listWrapper.find('#productsList').children()).toHaveLength(4);
  });
});

describe('Related Products Card', () => {
  let cardWrapper;
  beforeEach(() => {
    const { products } = relatedProductsData;
    const { styles } = relatedProductsData;
    const calculateAverage = () => {};
    cardWrapper = mount(
      <RelatedProductsCard
        product={products[0]}
        style={styles[0]}
        rating={3.5}
      />,
    );
  });

  it('Renders related Products Card', () => {
    expect(cardWrapper).toHaveLength(1);
  });
});

describe('Comparison Modal', () => {
  let comparisonWrapper;
  beforeEach(() => {
    const { products } = relatedProductsData;
    const updateModal = () => {};
    comparisonWrapper = mount(
      <ComparisonModal
        updateModal={updateModal}
        product={products[0]}
        currentProduct={products[1]}
      />,
    );
  });

  it('Renders Comparison Modal', () => {
    expect(comparisonWrapper).toHaveLength(1);
  });
});
