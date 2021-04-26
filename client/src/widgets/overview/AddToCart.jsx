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
import $ from 'jquery';
import api from '../../../../API/helper';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function AddToCart() {
  const { productId } = useContext(productContext);
  const { currentStyle } = useContext(styleContext);
  const [skuArray, setSkuArray] = useState(Object.values(currentStyle.skus));
  const [skuArray2, setSkuArray2] = useState(Object.keys(currentStyle.skus));
  const [sizeSelected, setSizeSelected] = useState(false);
  const [curSize, setCurSize] = useState('');
  const [sizeIndex, setSizeIndex] = useState(0);
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
  const [quanArray, setQuanArray] = useState(skuArray.map((sku) => (
    quanList(sku.quantity)
  )));
  const handleSizeClick = (boolean, string, num, numb) => {
    setSizeSelected(boolean);
    setCurSize(string);
    setSizeIndex(num);
    setCurSku(numb);
  };
  const handleQuantityClick = (num) => {
    setQuanSelected(num);
  };
  const handleCantAddToCartClick = () => {
    $('#dropdownMenu1').dropdown('toggle');
  };
  const addToCartClick = (num) => {
    api.postToCart(num)
      .then((res) => {
        setSizeSelected(false);
        console.log('Successfully post to cart', res.data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  };

  if (sizeSelected) {
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
              {curSize}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
              {skuArray.map((curStyle, index) => (
                <a className="dropdown-item" key={index} onClick={() => { handleSizeClick(true, curStyle.size, index, skuArray2[index]); }} href="#!" selected>{curStyle.size}</a>
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
              {quanSelected}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
              {quanArray[sizeIndex].map((eachQuant) => (
                <button className="dropdown-item" type="button" onClick={() => { handleQuantityClick(eachQuant); }} href="#!">{eachQuant}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <button type="button" className="btn btn-primary" onClick={() => { addToCartClick(curSku); }}>Add To Cart</button>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <div className="row d-flex justify-content-between">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle large"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            data-target="#sizeDropdown"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="sizeDropdown"
          >
            {skuArray[0].size}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {skuArray.map((curStyle, index) => (
              <button className="dropdown-item" type="button" key={index} onClick={() => { handleSizeClick(true, curStyle.size, index, skuArray2[index]); }} href="#!">{curStyle.size}</button>
            ))}
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle disabled"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            -
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {skuArray.map((curStyle, index) => (
              <a className="dropdown-item" key={index} href="#!">{quanArray[index]}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <button type="button" className="btn btn-primary" onClick={() => { handleCantAddToCartClick(); }} aria-controls="sizeDropdown">Add To Cart</button>
      </div>
    </div>
  );
}

export default AddToCart;
