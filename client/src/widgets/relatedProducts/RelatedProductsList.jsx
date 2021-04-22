/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import api from '../../../../API/helper.js';
import RelatedProductsCard from './RelatedProductsCard.jsx';
import productContext from '../../contexts/ProductContext.js';

function RelatedProductsList() {
  const itemsArray = useContext(productContext);
  const [products, setProducts] = useState();
  console.log('this is the products array: ', itemsArray);

  useEffect(() => {
    itemsArray.forEach((id) => {
      api.fetchEndpoint(`/products/${id}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log('Error fetching product: ', error);
        });
    });
  });

  return (
    <div>
      {products.map((product) => <RelatedProductsCard product={product} />)}
    </div>
  );
}
export default RelatedProductsList;
