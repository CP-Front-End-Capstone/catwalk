/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';
import Stars from './Stars.jsx';

function ProductInfoTop(props) {
  const { product } = useContext(productContext);
  const { currentStyle, revMeta } = useContext(styleContext);

  if (currentStyle && revMeta) {
    return (
      <div>
        <Stars />
        <h4>{product.category}</h4>
        <h1>{product.name}</h1>
        <h5>
          $
          {currentStyle.sale_price === null ? currentStyle.original_price : currentStyle.sale_price}
        </h5>
      </div>
    );
  }
  return <h1>Product info loading...</h1>;
}

export default ProductInfoTop;
