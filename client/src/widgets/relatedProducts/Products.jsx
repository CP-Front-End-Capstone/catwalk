/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import api from '../../../../API/helper.js';
import productContext from '../../contexts/ProductContext.js';
import RelatedProductsList from './RelatedProductsList.jsx';
import MyOutfitList from './MyOutfitList.jsx';

function RelatedProducts() {
  // const [products, setProducts] = useState(dummyProducts);
  const context = useContext(productContext);
  console.log('Current object: ', context);
  const [products, setProducts] = useState([]);
  const [isMounted, setIsMounted] = useState(null);
  const [styles, setStyles] = useState([]);

  const getProducts = (array) => {
    // fetch products object
    const productsArray = array.map((id) => (
      api.fetchEndpoint(`/products/${id}`)
    ));
    // const stylesArray = array.map((id) => (
      // api.fetchEndpoint(`/products/${id}/styles`)
    // ));
    Promise.all(productsArray).then((response) => {
      console.log('Your response object: ', response);
      setProducts(response);
    });
    // Promise.all(stylesArray).then((response) => {
    //   setStyles(response);
    // });
  };

  useEffect(() => {
    api.fetchEndpoint(`/products/${context.productId}/related`)
      .then((response) => {
        getProducts(response);
        setIsMounted(true);
        console.log('Your related Items: ', response);
      })
      .catch((error) => {
        console.log('Error fetching related items: ', error);
      });
  }, []);

  if (isMounted) {
    return (
      <div>
        <div>
          <h3>Related Items:</h3>
          <RelatedProductsList products={{ products, context }} />
        </div>
        <div>
          <h3>My Outfit:</h3>
          <MyOutfitList />
        </div>
      </div>
    );
  }
  return (
    'Related Items Loading...'
  );
}

export default RelatedProducts;
