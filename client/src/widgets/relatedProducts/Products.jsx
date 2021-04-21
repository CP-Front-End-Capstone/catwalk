/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { dummyProducts } from './exampleData.js';
import RelatedProductsList from './RelatedProductsList.jsx';

function RelatedProducts() {
  const [products, setProducts] = useState(dummyProducts);

  return (
    <div>
      <h3>Related Items:</h3>
      <RelatedProductsList products={products} />
    </div>
  );
}

export default RelatedProducts;
