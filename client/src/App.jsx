/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-sequences */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import api from '../../API/helper';
import productContext from './contexts/ProductContext';
import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
import QandA from './widgets/qa/QandA.jsx';
import Overview from './overview/Overview.jsx';
import RelatedProducts from './widgets/relatedProducts/Products.jsx';

const App = () => {
  const [productId, changeProductId] = useState('18079');
  const [product, changeProduct] = useState();
  const [styles, changeStyles] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/products/${productId}`)
      .then((productData) => {
        changeProduct(productData);
        api.fetchEndpoint(`/products/${productId}/styles`)
          .then((stylesData) => {
            changeStyles(stylesData.results);
          });
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, []);

  return (
    <div>
      <productContext.Provider value={{ productId }}>
        <RelatedProducts />
        <ReviewsRatings />
      </productContext.Provider>
    </div>
  );
};

export default App;
