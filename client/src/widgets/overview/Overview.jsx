/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable import/named */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext, useState, useEffect } from 'react';
import api from '../../../../API/helper';
import ImageGallery from './ImageGallery.jsx';
import ProductInfoTop from './ProductInfoTop.jsx';
import ProductInfoBottom from './ProductInfoBottom.jsx';
import Styles from './Styles.jsx';
import AddToCart from './AddToCart.jsx';
import ExpandedImageGallery from './ExpandedImageGallery.jsx';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function Overview(props) {
  const { product, productId } = useContext(productContext);
  const [styles, changeStyles] = useState();
  const [currentStyle, setStyle] = useState();
  const [currentImage, setImage] = useState();
  const [imageView, setImageView] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photosLength, setPhotosLength] = useState();
  const [curStyleInd, setCurStyleInd] = useState(0);
  const [revMeta, setRevMeta] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/products/${productId}/styles`)
      .then((stylesData) => {
        console.log('this is styles data:', stylesData);
        changeStyles(stylesData.results);
        setStyle(stylesData.results[0]);
        setImage(stylesData.results[0].photos[0].url);
        setPhotosLength(stylesData.results[0].photos.length);
        api.fetchEndpoint(`/reviews/meta/?product_id=${productId}`)
          .then((reviewsMeta) => {
            setRevMeta(reviewsMeta);
          });
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, [productId]);

  if (imageView) {
    return (
      <div className="container " id="overview">
        <styleContext.Provider value={{
          styles,
          currentStyle,
          currentImage,
          setImage,
          setStyle,
          imageView,
          setImageView,
          currentPhotoIndex,
          setCurrentPhotoIndex,
          photosLength,
          curStyleInd,
          setCurStyleInd,
        }}
        >
          <div className="row d-flex justify-content-between">
            <div className="col">
              <ExpandedImageGallery />
            </div>
          </div>
          <div className="row">
            <ProductInfoBottom />
          </div>
        </styleContext.Provider>
      </div>
    );
  }
  if (currentStyle) {
    return (
      <div className="container" id="overview">
        <styleContext.Provider value={{
          styles,
          currentStyle,
          currentImage,
          setImage,
          setStyle,
          imageView,
          setImageView,
          currentPhotoIndex,
          setCurrentPhotoIndex,
          photosLength,
          curStyleInd,
          setCurStyleInd,
        }}
        >
          <div className="row d-flex justify-content-between">
            <div className="col">
              <ImageGallery />
            </div>
            <div className="col d-flex align-content-around flex-wrap">
              <ProductInfoTop />
              <Styles />
              <AddToCart />
            </div>
          </div>
          <div className="row">
            <ProductInfoBottom />
          </div>
        </styleContext.Provider>
      </div>
    );
  }
  return <h1>Loading Product Overview</h1>;
}

export default Overview;
