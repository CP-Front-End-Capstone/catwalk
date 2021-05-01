/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
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
    styles, currentImage, currentStyle, setImageView, setCurrentPhotoIndex, currentPhotoIndex, photosLength,
  } = useContext(styleContext);
  const handleMainImageClick = (boolean, num) => {
    setImageView(boolean);
  };
  const handleTnImageClick = (num) => {
    setCurrentPhotoIndex(num);
  };

  if (currentImage) {
    return (
      // <!--Carousel Wrapper-->
      <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel" data-interval="false">
        {/* <!--Slides--> */}
        <div className="carousel-inner" role="listbox">
          {currentStyle.photos.map((photo, index) => (
            <div className={index === currentPhotoIndex ? 'carousel-item active' : 'carousel-item'} key={index} id="carouselImages">
              <img
                className="d-block w-100"
                style={{
                  minHeight: '500px',
                  maxHeight: '500px',
                  maxWidth: '550px',
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
        <a className={currentPhotoIndex === 0 ? 'carousel-control-prev d-none' : 'carousel-control-prev'} href="#carousel-thumb" role="button" data-slide="prev" onClick={() => setCurrentPhotoIndex(currentPhotoIndex - 1)}>
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className={currentPhotoIndex === photosLength - 1 ? 'carousel-control-next d-none' : 'carousel-control-next'} href="#carousel-thumb" role="button" data-slide="next" onClick={() => setCurrentPhotoIndex(currentPhotoIndex + 1)}>
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>

        {/* <!--/.Controls--> */}
        <div className="carousel-controls">
          <a className={currentPhotoIndex === 0 ? 'up carousel-control-prev d-none' : 'up carousel-control-prev'} href="#carousel-thumb1" role="button" data-slide="prev" onClick={() => setCurrentPhotoIndex(currentPhotoIndex - 1)}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <ol
            className="carousel-indicators d-flex flex-column justify-content-between"
            id="thumbnails"
            style={{
              position: 'absolute',
              top: '10px',
              left: '0px',
              height: '400px',
              maxWidth: '100px',
              width: '100px',
              border: 'none',
            }}
          >
            {currentStyle.photos.map((photo, index) => (
              <li data-target="#carousel-thumb" key={index} data-slide-to={index} className={index === currentPhotoIndex ? 'active' : 'inactive'}>
                <img
                  className="w-100"
                  src={photo.thumbnail_url}
                  key={index}
                  className="img-fluid"
                  alt="thumbnail"
                  onClick={() => handleTnImageClick(index)}
                  style={
                    index === currentPhotoIndex
                      ? {
                        maxWidth: '75px',
                        height: '50px',
                        marginBottom: '20px',
                        overflow: 'hidden',
                        display: 'block',
                        border: '2px solid #fff',
                      }

                      : {
                        maxWidth: '75px',
                        height: '50px',
                        marginBottom: '20px',
                        overflow: 'hidden',
                        display: 'block',
                      }
                  }
                />
              </li>
            ))}
          </ol>
          <a className="down carousel-control" href="#carousel-thumb" data-slide="next">
            <span className="glyphicon glyphicon-chevron-bottom" />
          </a>
        </div>
      </div>
      // <!--/.Carousel Wrapper-->

    );
  }
  return <h1 id="loadingImage">Loading image...</h1>;
}

export default ImageGallery;
