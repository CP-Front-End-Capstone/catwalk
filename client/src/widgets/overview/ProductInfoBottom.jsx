/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext.js';

function ProductInfoBottom(props) {
  const { product } = useContext(ProductContext);
  const { styles } = useContext(ProductContext);
  return (
    <div>
      <h4>{product.slogan}</h4>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductInfoBottom;
