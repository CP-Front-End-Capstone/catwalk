/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext.js';

function ProductInfoTop() {
  const { product } = useContext(ProductContext);
  const { styles } = useContext(ProductContext);
  return (
    <div>
      <h4>{product.category}</h4>
      <h1>{product.name}</h1>
      <h5>
        $
        {styles[0].original_price}
      </h5>
    </div>
  );
}

export default ProductInfoTop;
