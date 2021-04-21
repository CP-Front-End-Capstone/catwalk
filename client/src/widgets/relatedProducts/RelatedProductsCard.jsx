/* eslint-disable no-unused-vars */
import React from 'react';

function RelatedProductsCard({ product }) {
  return (
    <div>
      <h5>{product.category}</h5>
      <h4>{product.name}</h4>
      <h5>{product.default_price}</h5>
    </div>
  );
}

export default RelatedProductsCard;
