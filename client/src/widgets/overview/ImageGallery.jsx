/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext.js';

function ImageGallery() {
  const { styles } = useContext(ProductContext);
  return (<img className="img" src={styles[0].photos[0].url} alt="Thumbnail image" />);
}

export default ImageGallery;
