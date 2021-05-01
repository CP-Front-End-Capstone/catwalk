/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import config from '../../../../API/config';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function NoStock(props) {
  return (
    <div className="container mx-auto">
      <div className="row d-flex justify-content-between">
        <div className="dropdown">

          <button
            className="btn btn-primary dropdown-toggle btn-large"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            data-target="#sizeDropdown"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="sizeDropdown"
            aria-label="sizeDropdown"
          >
            Out of Stock
          </button>

          <div className="dropdown-menu" aria-labelledby="dropdownMenu1" />

        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle btn-large disabled"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="quantityButton"
          >
            Out of Stock
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1" />
        </div>
      </div>
      <div className="row mt-4">
        <button type="button" className="btn btn-primary d-none" aria-label="addToCartButton" aria-controls="sizeDropdown">Add To Cart</button>
      </div>
    </div>
  );
}

export default NoStock;
