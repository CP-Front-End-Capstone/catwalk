/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext, useState } from 'react';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function AddToCart() {
  const { currentStyle } = useContext(productContext);
  const [skuArray, setSkuArray] = useState([]);

  return (
    <div className="container mx-auto">
      <div className="row d-flex justify-content-between">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Size
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">

            <a className="dropdown-item" href="#!">Action</a>
            <a className="dropdown-item" href="#!">Another action</a>
          </div>
        </div>
        <button type="button" className="btn btn-primary">Size Selection</button>
        <button type="button" className="btn btn-primary">Quantity</button>
      </div>
      <div className="row mt-4">
        <button type="button" className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
}

export default AddToCart;
