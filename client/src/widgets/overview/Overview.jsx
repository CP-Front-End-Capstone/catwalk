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
import { ProductContext } from '../../contexts/ProductContext.js';

function Overview(props) {
  const { product, styles } = useContext(ProductContext);
  const [currentStyle, changeCurrentStyle] = useState(styles[0].style_id);

  return (
    <div class="container ">
      <div class="row d-flex justify-content-between">
        <div class="col">
          <ImageGallery />
        </div>
        <div class="col d-flex align-content-around flex-wrap">
          <ProductInfoTop />
          <Styles changeCurrentStyle={changeCurrentStyle} />
          <AddToCart />
        </div>
      </div>
      <div class="row">
        <ProductInfoBottom />
      </div>
    </div>
  );
}

export default Overview;
