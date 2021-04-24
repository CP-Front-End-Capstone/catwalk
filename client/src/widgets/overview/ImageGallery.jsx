/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext, useState, useEffect } from 'react';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function ImageGallery(props) {
  const {
    styles, currentImage, currentStyle, setImage,
  } = useContext(productContext);

  if (styles) {
    return (<img className="img w-100" src={currentImage} alt="Thumbnail image" />);
  }
  return <h1>Loading image...</h1>;
}

export default ImageGallery;
