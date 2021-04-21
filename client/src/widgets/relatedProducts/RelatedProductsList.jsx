/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

function RelatedProductsList({ products }) {
  return (
    <div>
      {products.map((product) => <RelatedProductsCard product={product} />)}
    </div>
  );
}
export default RelatedProductsList;
