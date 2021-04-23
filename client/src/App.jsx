/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import api from '../../API/helper';
import productContext from './contexts/ProductContext';
import QandA from './widgets/qa/QandA.jsx';
import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
import Overview from './widgets/overview/Overview.jsx';

const App = () => {
  const [productId, changeProductId] = useState('18078');
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
  }, [productId]);

  return (
    <div>
      <div>
        <productContext.Provider value={{ productId }}>
          <QandA />
          <ReviewsRatings />
        </productContext.Provider>
      </div>
    </div>
  );
};

export default App;
