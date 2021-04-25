/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext, useState } from 'react';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function AddToCart() {
  const { currentStyle } = useContext(styleContext);
  const [skuArray, setSkuArray] = useState(Object.values(currentStyle.skus));

  return (
    <div className="container mx-auto">
      <div className="row d-flex justify-content-between">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Size
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {skuArray.map((curStyle, index) => (
              <a className="dropdown-item" key={index} href="#!">{curStyle.size}</a>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Quantity
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {skuArray.map((curStyle, index) => (
              <a className="dropdown-item" key={index} href="#!">{curStyle.quantity}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <button type="button" className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
}

export default AddToCart;
