/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
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
    styles, currentImage, currentStyle, setImageView, setCurrentPhotoIndex,
  } = useContext(styleContext);
  const handleMainImageClick = (boolean, num) => {
    setImageView(boolean);
  };

  if (currentImage) {
    return (
      // <!--Carousel Wrapper-->
      <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
        {/* <!--Slides--> */}
        <div className="carousel-inner" role="listbox">
          {currentStyle.photos.map((photo, index) => (
            <div className={`carousel-item ${(index === 0) && 'active'}`} key={index}>
              <img
                className="d-block w-100"
                style={{
                  minHeight: '690px',
                  cursor: 'zoom-in',
                }}
                src={photo.url}
                key={index}
                alt="Main image"
                onClick={(index) => {
                  handleMainImageClick(true);
                }}
              />
            </div>
          ))}
        </div>
        {/* <!--/.Slides-->
          <!--Controls--> */}
        <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
        {/* <!--/.Controls--> */}

        <ol
          className="carousel-indicators d-flex flex-column justify-content-between "
          style={{
            position: 'absolute',
            top: '10px',
            left: '0px',
            height: '600px',
            maxWidth: '100px',
            width: '100px',
            border: 'none',
          }}
        >
          {currentStyle.photos.map((photo, index) => (
            <li data-target="#carousel-thumb" data-slide-to={index} className={index === 0 && 'active'}>
              <img
                className="w-100"
                src={photo.thumbnail_url}
                className="img-fluid"
                alt="tn"
                style={
                {
                  maxWidth: '100px',
                  height: '75px',
                  marginBottom: '20px',
                  overflow: 'hidden',
                  display: 'block',
                }
              }
              />
            </li>
          ))}
        </ol>
      </div>
      // <!--/.Carousel Wrapper-->

    );
  }
  return <h1>Loading image...</h1>;
}

export default ImageGallery;
