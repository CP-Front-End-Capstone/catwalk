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
  const [productId, changeProductId] = useState('18078');
  const [product, changeProduct] = useState();
  const [styles, changeStyles] = useState();
  const [relatedItems, setItems] = useState();
  const [isMounted, setIsMounted] = useState(null);

  useEffect(() => {
    api.fetchEndpoint(`/products/${productId}`)
      .then((productData) => {
        changeProduct(productData);
        setIsMounted(true);
        api.fetchEndpoint(`/products/${productId}/styles`)
          .then((stylesData) => {
            changeStyles(stylesData.results);
            api.fetchEndpoint(`/products/${productId}/related`)
              .then((itemsArray) => {
                setItems(itemsArray);
              });
          });
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, []);

  if (isMounted) {
    return (
      <div>
        <h1>Hello Even Bigger Earth!</h1>
        <div>
          <productContext.Provider value={productId}>
            {/* <ReviewsRatings /> */}
            <RelatedProducts />
          </productContext.Provider>
        </div>
      </div>
    );
  }
  return (
    'Loading...'
  );
};

export default App;
