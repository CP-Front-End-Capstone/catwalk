/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import api from '../../../../API/helper.js';
import { productContext } from '../../contexts/ProductContext.js';
import RelatedProductsList from './RelatedProductsList.jsx';
import MyOutfitList from './MyOutfitList.jsx';

function RelatedProducts() {
  const context = useContext(productContext);
  const { trackClicks } = context;
  const { dateGenerator } = context;
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState(0);

  const getProducts = (array) => {
    // fetch products object
    const productsArray = array.map((id) => (
      api.fetchEndpoint(`/products/${id}`)
    ));

    const stylesArray = array.map((id) => (
      api.fetchEndpoint(`/products/${id}/styles`)
    ));

    const reviewsArray = array.map((id) => (
      api.fetchEndpoint(`/reviews/meta/?product_id=${id}`)
    ));

    Promise.all(productsArray).then((response) => {
      setProducts(response);
    });

    Promise.all(stylesArray).then((response) => {
      setStyles(response);
    });

    Promise.all(reviewsArray).then((response) => {
      setReviewsMeta(response);
    });
  };

  useEffect(() => {
    api.fetchEndpoint(`/products/${context.productId}/related`)
      .then((response) => {
        getProducts(response);
      })
      .catch((error) => {
        console.log('Error fetching related items: ', error);
      });
  }, [context.productId]);

  if (reviewsMeta && products.length !== 0 && styles.length !== 0) {
    return (
      <div id="products">
        <div className="container">
          <h4 className="h4 lead">Related Items:</h4>
          <RelatedProductsList
            products={products}
            styles={styles}
            rating={reviewsMeta}
            currentProduct={context.product}
            changeProductId={context.changeProductId}
            context={context}
          />
        </div>
        <div className="container">
          <h4 className="h4 lead">Your Outfit:</h4>
          <MyOutfitList
            overviewProduct={context.product}
            styles={context.styles}
            context={context}
          />
        </div>
      </div>
    );
  }
  return (
    ''
  );
}

export default RelatedProducts;
