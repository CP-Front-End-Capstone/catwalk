/* eslint-disable react/no-unknown-property */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import Styles from './Styles.jsx';
import AddToCart from './AddToCart.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-8">
            <ImageGallery />
          </div>
          <div class="col-4">
            <Styles />
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <ProductInfo />
          </div>
          <div class="col-4">
            <AddToCart />
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
