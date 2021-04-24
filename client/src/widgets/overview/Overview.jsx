/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext, useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfoTop from './ProductInfoTop.jsx';
import ProductInfoBottom from './ProductInfoBottom.jsx';
import Styles from './Styles.jsx';
import AddToCart from './AddToCart.jsx';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function Overview(props) {
  const { product, styles } = useContext(productContext);
  const [currentStyles, setStyles] = useState([]);
  const [currentImage, setImage] = useState('');

  const getProducts = (array) => {
    const stylesArray = array.map((id) => (
      api.fetchEndpoint(`/products/${id}/styles`)
    ));

    Promise.all(stylesArray).then((response) => {
      setStyles(response);
    });
  };

  if (currentStyles) {
    return (
      <div className="container ">
        <styleContext.Provider value={{
          currentStyles, setImage, setStyles, currentImage,
        }}
        >
          <div className="row d-flex justify-content-between">
            <div className="col">
              <ImageGallery />
            </div>
            <div className="col d-flex align-content-around flex-wrap">
              <ProductInfoTop />
              <Styles />
              <AddToCart />
            </div>
          </div>
          <div className="row">
            <ProductInfoBottom />
          </div>
        </styleContext.Provider>
      </div>
    );
  }
  return <h1>Loading Product Overview</h1>;
}

export default Overview;
