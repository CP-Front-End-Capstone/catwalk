/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/named */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext, useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function ImageGallery(props) {
  const {
    styles, currentImage, currentStyle, setImageView,
  } = useContext(styleContext);
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  const handleMainImageClick = (boolean) => {
    setImageView(boolean);
  };

  if (currentImage) {
    return (
      <div>
        <Carousel>
          {currentStyle.photos.map((photo, index) => (
            <div>
              <img className="img w-100" src={photo.url} alt="Main image" onClick={() => { handleMainImageClick(true); }} />
            </div>
          ))}
        </Carousel>
      </div>

    );
  }
  return <h1>Loading image...</h1>;
}

export default ImageGallery;
