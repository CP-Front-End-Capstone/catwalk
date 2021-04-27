/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import api from '../../../../API/helper.js';
import { productContext } from '../../contexts/ProductContext.js';
import reviewContext from '../../contexts/ReviewContext.js';
import RelatedProductsList from './RelatedProductsList.jsx';
import MyOutfitList from './MyOutfitList.jsx';

function RelatedProducts() {
  const context = useContext(productContext);
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState([]);

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
  }, []);

  if (products.length !== 0 && styles.length !== 0) {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="h4">Related Items:</h3>
          <reviewContext.Provider value={{ reviewsMeta }}>
            <RelatedProductsList products={products} styles={styles} rating={context.starAvg} currentProduct={context.product} />
          </reviewContext.Provider>
        </div>
        <div className="container-fluid">
          <h3 className="h4">My Outfit:</h3>
          <MyOutfitList currentProduct={context.product} styles={context.styles} />
        </div>
      </div>
    );
  }
  return (
    'Related Items Loading...'
  );
}

export default RelatedProducts;
