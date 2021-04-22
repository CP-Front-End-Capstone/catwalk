/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import api from '../../API/helper';
import productContext from './contexts/ProductContext';
import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
import QandA from './widgets/qa/QandA.jsx';

const App = () => {
  const [productId, changeProductId] = useState('18078');
  const [product, changeProduct] = useState();
  const [styles, changeStyles] = useState();
  const [reviewList, setReviewList] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/products/${productId}`)
      .then((productData) => {
        changeProduct(productData);
        api.fetchEndpoint(`/products/${productId}/styles`)
          .then((stylesData) => {
            changeStyles(stylesData.results);
          });
        api.fetchEndpoint(`/reviews/?product_id=${productId}&count=2&sort=relevant`)
          .then((reviewData) => {
            setReviewList(reviewData);
          });
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, [productId]);

  return (
    <div>
      <h1>Hello Even Bigger Earth!</h1>
      <div>
        <productContext.Provider value={{ productId, changeProductId, reviewList }}>
          <ReviewsRatings />
        </productContext.Provider>
      </div>
    </div>
  );
};

export default App;
