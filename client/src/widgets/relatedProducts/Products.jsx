/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { dummyProducts } from './exampleData.js';
import api from '../../../../API/helper.js';
import productContext from '../../contexts/ProductContext.js';
import RelatedProductsList from './RelatedProductsList.jsx';

function RelatedProducts() {
  // const [products, setProducts] = useState(dummyProducts);
  const productId = useContext(productContext);
  // const [related, setRelated] = useState();
  const [products, setProducts] = useState([]);

  const getProducts = (array) => {
    const promises = array.map((id) => (
      api.fetchEndpoint(`/products/${id}`)
    ));
    Promise.all(promises).then((response) => {
      setProducts(response);
    });
  };

  useEffect(() => {
    api.fetchEndpoint(`/products/${productId}/related`)
      .then((response) => {
        getProducts(response);
        console.log('Your related Items: ', response);
      })
      .catch((error) => {
        console.log('Error fetching related items: ', error);
      });
  }, []);

  return (
    <div>
      <div>
        <h3>Related Items:</h3>
        <RelatedProductsList products={products} />
      </div>
    </div>
  );
}

export default RelatedProducts;
