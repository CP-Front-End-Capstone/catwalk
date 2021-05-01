/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-empty */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import config from '../../../../API/config';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';
import NoStock from './NoStock.jsx';

function AddToCart() {
  const { productId } = useContext(productContext);
  const { currentStyle } = useContext(styleContext);
  const [skuArray, setSkuArray] = useState(Object.values(currentStyle.skus));
  const [skuArray2, setSkuArray2] = useState(Object.keys(currentStyle.skus));
  const [sizeSelected, setSizeSelected] = useState(false);
  const [curSize, setCurSize] = useState('');
  const [sizeIndex, setSizeIndex] = useState(0);
  const [noStock, setNoStock] = useState(skuArray2[0] === 'null');
  const [quanSelected, setQuanSelected] = useState(1);
  const [curSku, setCurSku] = useState(0);

  const quanList = (num) => {
    const resultArr = [];
    if (num > 15) {
      for (let i = 1; i <= 15; i++) {
        resultArr.push(i);
      }
    } else {
      for (let i = 1; i <= num; i++) {
        resultArr.push(i);
      }
    }
    return resultArr;
  };

  const [quanArray, setQuanArray] = useState(skuArray ? skuArray.map((sku) => (
    quanList(sku.quantity)
  )) : setNoStock(true));

  const handleSizeClick = (boolean, string, num, numb) => {
    setSizeSelected(boolean);
    setCurSize(string);
    setSizeIndex(num);
    setCurSku(numb);
  };

  const handleQuantityClick = (num) => {
    setQuanSelected(num);
  };

  const handleCantAddToCartClick = (e) => {
    e.preventDefault();
    $('#dropTop').slideToggle('fast');
  };

  const addToCartClick = (num) => {
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/cart',
      headers: {
        Authorization: config.TOKEN,
      },
      data: {
        sku_id: num,
      },
    })
      .then((res) => {
        setSizeSelected(false);
        console.log('Successfully post to cart', res.data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  };

  { return noStock
    ? <NoStock />
    : (
      <div className="container mx-auto">
        <div className="d-flex flex-row justify-content-md-between">
          <div
            className="dropdown"
          >
            <button
              className="btn btn-primary dropdown-toggle btn-large"
              type="button"
              data-toggle="dropdown"
              data-target="#sizeDropdown"
              id="popItLikeItsHot"
              data-container="body"
              aria-expanded="false"
              aria-label="sizeDropdown"
              aria-controls="sizeDropdown"
            >
              {sizeSelected ? curSize : 'Select Size'}
            </button>
            <div className="dropdown-menu" id="dropTop" aria-labelledby="dropdownMenu1">
              {skuArray.map((curStyle, index) => (
                <button
                  className="dropdown-item"
                  type="button"
                  id="sizeButton"
                  aria-label="sizeButton"
                  key={index}
                  onClick={sizeSelected
                    ? () => { handleSizeClick(true, curStyle.size, index, skuArray2[index]); }
                    : () => {
                      handleSizeClick(true, curStyle.size, index, skuArray2[index]);
                      $('#dropTop').slideToggle('fast');
                    }}
                  href="#!"
                >
                  {curStyle.size}
                </button>
              ))}
            </div>
          </div>
          <div className="dropdown">
            <button
              className={`btn btn-primary dropdown-toggle btn-large ${!sizeSelected && 'disabled'}`}
              type="button"
              id="dropdownMenu2"
              aria-label="sizeDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {sizeSelected ? quanSelected : '____'}
            </button>
            <div className="dropdown-menu" aria-label="dropdownMenu1">
              {sizeSelected
                ? quanArray[sizeIndex].map((eachQuant) => (
                  <button className="dropdown-item" type="button" onClick={() => { handleQuantityClick(eachQuant); }} href="#!">{eachQuant}</button>
                )) : skuArray.map((curStyle, index) => (
                  <a className="dropdown-item" key={index} href="#!">{quanArray[index]}</a>
                ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-md-center">
          <button
            type="button"
            className="btn btn-primary"
            id="addToCartButton"
            onClick={sizeSelected
              ? () => { addToCartClick(curSku); }
              : (e) => { handleCantAddToCartClick(e); }}
            aria-controls="sizeDropdown"
            aria-label="addToCartButton"
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default AddToCart;
