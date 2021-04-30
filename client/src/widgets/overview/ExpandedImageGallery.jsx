/* eslint-disable react/jsx-no-undef */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import InnerImageZoom from 'react-inner-image-zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import '../../../../node_modules/react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function ExpandedImageGallery(props) {
  const {
    imageView, styles, currentImage, currentStyle, setImageView, currentPhotoIndex, photosLength, setCurrentPhotoIndex,
  } = useContext(styleContext);

  const [expImageClicked, setExpImageClicked] = useState(false);
  const toDefaultImageClick = (boolean) => {
    setImageView(boolean);
  };
  const handleExpandedClick = (boolean) => {
    setExpImageClicked(boolean);
  };

  const handleIconClick = (num) => {
    setCurrentPhotoIndex(num);
  };

  if (expImageClicked) {
    return (
      <div className="carousel-inner" role="listbox">
        {currentStyle.photos.map((photo, index) => (
          <div className={`carousel-item ${(index === 0) && 'active'}`} key={index}>
            <InnerImageZoom
              className="d-block w-100"
              style={{
                minHeight: '800px',
              }}
              src={photo.url}
              key={index}
              zoomScale={2.5}
              afterZoomOut={() => { toDefaultImageClick(); }}
              alt="Main image"

            />
          </div>
        ))}
      </div>
    );
  }
  if (currentImage) {
    return (
      // <!--Carousel Wrapper-->
      <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
        {/* <!--Slides--> */}
        <div className="carousel-inner" role="listbox">
          {currentStyle.photos.map((photo, index) => (
            <div className={index === currentPhotoIndex ? 'carousel-item active' : 'carousel-item'} key={index}>
              <InnerImageZoom
                className="d-block w-100"
                style={{
                  maxHeight: '600px',
                  maxWidth: '700px',
                  marginBottom: '20px',
                }}
                src={photo.url}
                key={index}
                zoomScale={2.5}
                afterZoomOut={() => { toDefaultImageClick(false); }}
                alt="Product image"
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
            <li data-target="#carousel-thumb" data-slide-to={index} key={index} className={index === currentPhotoIndex ? 'active' : 'inactive'}>
              <FontAwesomeIcon
                icon={faImage}
                listItem
                key={index}
                style={{
                  height: '75px',
                  width: '75px',
                  marginBottom: '10px',
                  overflow: 'hidden',
                  display: 'block',
                }}
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

export default ExpandedImageGallery;
