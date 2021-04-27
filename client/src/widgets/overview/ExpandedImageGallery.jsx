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
import '../../../../node_modules/react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function ExpandedImageGallery(props) {
  const {
    imageView, styles, currentImage, currentStyle, setImageView, currentPhotoIndex,
  } = useContext(styleContext);

  const [expImageClicked, setExpImageClicked] = useState(false);
  const toDefaultImageClick = (boolean) => {
    setImageView(boolean);
  };
  const handleExpandedClick = (boolean) => {
    setExpImageClicked(boolean);
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
            <div className={`carousel-item ${(index === 0) && 'active'}`} key={index}>
              <InnerImageZoom
                className="d-block w-100"
                style={{
                  minHeight: '800px',
                }}
                src={photo.url}
                key={index}
                zoomScale={2.5}
                onClick={() => { setExpImageClicked(true); }}
                afterZoomOut={() => { toDefaultImageClick(false); }}
                alt="Main image"
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
                src="./images/image.png"
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

export default ExpandedImageGallery;
