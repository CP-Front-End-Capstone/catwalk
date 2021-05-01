/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable import/named */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext, useState, useEffect } from 'react';
import { productContext } from '../../contexts/ProductContext.js';
import { styleContext } from '../../contexts/StyleContext.js';

function Styles(props) {
  const {
    styles,
    currentStyle,
    setStyle,
    setImage,
    curStyleInd,
    setCurStyleInd,
  } = useContext(styleContext);

  const handleClick = (value, url, num) => {
    setStyle(value);
    setImage(url);
    setCurStyleInd(num);
  };

  if (currentStyle && styles) {
    return (
      <div className="container ">
        <div className="row">
          <h5 id="styleName">
            {`Style: ${currentStyle.name}`}
          </h5>
        </div>
        <div className="row row-cols-4" id="styleList">
          {styles.map((style1, index) => (

            <img
              key={index}
              className="img-thumbnail col"
              style={
                index === curStyleInd
                  ? {
                    height: '65px',
                    width: '40px',
                    border: '4px solid #F57B6A',
                    marginBottom: '10px',
                  }
                  : {
                    height: '65px',
                    width: '40px',
                    marginBottom: '10px',
                  }
              }
              key={style1.style_id}
              src={style1.photos[0].thumbnail_url}
              alt="Thumbnail image"
              onClick={() => { handleClick(style1, style1.photos[0].url, index); }}
            />

          ))}
        </div>
      </div>
    );
  }
  return <h1>Styles loading...</h1>;
}

export default Styles;
