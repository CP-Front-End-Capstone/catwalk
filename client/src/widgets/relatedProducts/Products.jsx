/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { dummyProducts } from './exampleData.js';
import RelatedProductsList from './RelatedProductsList.jsx';

function RelatedProducts() {
  const [products, setProducts] = useState(dummyProducts);

  return (
    <div>
      <div>
        <h3>Related Items:</h3>
        <RelatedProductsList products={products} />
      </div>
    </div>
  );
}

export default RelatedProducts;
