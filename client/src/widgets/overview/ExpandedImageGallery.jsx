/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function ExpandedImageGallery(props) {
  const {
    styles, currentImage, currentStyle, setImageView,
  } = useContext(styleContext);
  const handleExpandedClick = (boolean) => {
    setImageView(boolean);
  };

  if (currentImage) {
    return (
      <div>
        <Carousel>
          {currentStyle.photos.map((photo, index) => (
            <div>
              <img className="img w-100" src={photo.url} alt="Main image" onClick={() => { handleExpandedClick(false); }} />
            </div>
          ))}
        </Carousel>
      </div>

    );
  }
  return <h1>Loading image...</h1>;
}

export default ExpandedImageGallery;
