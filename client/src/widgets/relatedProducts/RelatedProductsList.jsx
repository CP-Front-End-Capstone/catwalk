/* eslint-disable import/no-unresolved */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
// import api from '../../../../API/helper.js';
import RelatedProductsCard from './RelatedProductsCard.jsx';
// import productContext from '../../contexts/ProductContext.js';

function RelatedProductsList({ products }) {
  console.log('List of Products: ', products.products);
  console.log('List of Styles: ', products.context.styles);

  return (
    <div className="container">
      <div className="row">
        {products.products.map((product) => (
          <ul key={product.id}>
            <RelatedProductsCard product={product} />
          </ul>
        ))}
      </div>
    </div>
  );
}
export default RelatedProductsList;

{ /* <div className="container">
<div className="row">
  {products.products.map((product) => products.context.styles.map((style) => (
    <RelatedProductsCard product={product} style={style} />
  )))}
</div>
</div> */ }
