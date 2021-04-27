/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { productContext } from '../../contexts/ProductContext.js';

function ProductInfoBottom(props) {
  const { product, styles } = useContext(productContext);

  if (styles) {
    return (
      <div>
        <h4>{product.slogan}</h4>
        <p>{product.description}</p>
      </div>
    );
  }
  return <h1>Product info loading...</h1>;
}

export default ProductInfoBottom;
