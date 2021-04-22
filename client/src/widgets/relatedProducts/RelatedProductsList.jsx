/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';
import productContext from '../../contexts/ProductContext.js';

function RelatedProductsList({ products }) {
  const itemsArray = useContext(productContext);
  const [productId, changeProductId] = useState('18078');
  console.log('this is the products array: ', itemsArray);
  return (
    <div>
      {products.map((product) => <RelatedProductsCard product={product} />)}
    </div>
  );
}
export default RelatedProductsList;
