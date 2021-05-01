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
import MyOutfitList from '../../client/src/widgets/relatedProducts/MyOutfitList.jsx';
import MyOutfitCard from '../../client/src/widgets/relatedProducts/MyOutfitCard.jsx';
import ProductCard from '../../client/src/widgets/relatedProducts/ProductCard.jsx';

// PRODUCTS.JSX TESTS
describe('Related Products Component', () => {
  const wrapper = shallow(<RelatedProducts />);
  it('Renders Products Component', () => {
    expect(wrapper).toHaveLength(1);
  });
});

// RELATED PRODUCTS LIST TESTS
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

// RELATED PRODUCTS CARD TESTS
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

// COMPARISON MODAL TESTS
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

// MY OUTFIT LIST TESTS
describe('My Outfit List', () => {
  let outfitWrapper;
  beforeEach(() => {
    const { products } = relatedProductsData;
    const { styles } = relatedProductsData;
    outfitWrapper = mount(
      <MyOutfitList
        overviewProduct={products[0]}
        styles={products[0]}
      />,
    );
  });

  it('Renders My Outfit list', () => {
    expect(outfitWrapper).toHaveLength(1);
  });
});

// MY OUTFIT CARD
describe('My Outfit Card', () => {
  let outfitCardWrapper;
  beforeEach(() => {
    const updateFit = () => {};
    outfitCardWrapper = mount(
      <MyOutfitCard
        updateFit={updateFit}
      />,
    );
  });

  it('Renders My Outfit list', () => {
    expect(outfitCardWrapper).toHaveLength(1);
  });
});

// PRODUCT CARD
describe('My Outfit Product Card', () => {
  let productCardWrapper;
  beforeEach(() => {
    const updateFit = () => {};
    const { products } = relatedProductsData;
    const { styles } = relatedProductsData;
    productCardWrapper = mount(
      <ProductCard
        overviewProduct={products[0]}
        style={styles[0]}
        updateFit={updateFit}
      />,
    );
  });

  it('Renders Product Card', () => {
    expect(productCardWrapper).toHaveLength(1);
  });
});
