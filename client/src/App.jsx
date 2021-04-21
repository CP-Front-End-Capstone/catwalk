import React, { useState, useEffect } from 'react';
import api from '../../API/helper';
// import productContext from './contexts/ProductContext';
// import ReviewsRatings from './widgets/reviews/ReviewsRatings.jsx';
// import QandA from './widgets/qa/QandA.jsx';

const App = () => {
  const [productId, changeProductId] = useState('18078');
  const [product, changeProduct] = useState();
  const [styles, changeStyles] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/products/${productId}`)
      .then((productData) => {
        changeProduct(productData);
        api.fetchEndpoint(`products`);
      });
  });
  // changeStyles(stylesData.results);

  return (
    <div>
      <h1>Hello Even Bigger Earth!</h1>
      <div>
        {/* <productContext.Provider value={1}>
          <ReviewsRatings />
          <QandA />
        </productContext.Provider> */}
        {productId}
        {JSON.stringify(product)}
        {/* {JSON.stringify(styles)} */}
      </div>
    </div>
  );
};

export default App;
