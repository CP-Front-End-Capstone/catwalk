/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function RelatedProductsCard({ product }) {
  return (
    <div>
      <div>
        <h5>{product.category}</h5>
      </div>
      <div>
        <h6>{product.description}</h6>
      </div>
      <div>
        <h5>{product.default_price}</h5>
      </div>
    </div>
  );
}

export default RelatedProductsCard;
