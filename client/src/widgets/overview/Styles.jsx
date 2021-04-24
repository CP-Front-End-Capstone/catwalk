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
  const { styles } = useContext(productContext);
  const { currentStyles, setStyles, setImage } = useContext(styleContext);
  const handleClick = (value, url) => {
    setStyles(value);
    setImage(url);
  };

  if (styles) {
    const firstStyle = styles[0];
    return (
      <div className="container ">
        <div className="row">
          <h5>
            Style
            :&nbsp;
            {currentStyles.name}
          </h5>
        </div>
        <div className="row d-flex align-content-around flex-wrap row-cols-4">
          {styles.map((style) => (

            <img
              className="img-thumbnail m-1"
              key={style.style_id}
              src={style.photos[0].thumbnail_url}
              alt="Thumbnail image"
              onClick={() => { handleClick(style, style.photos[0].url); }}
            />

          ))}
        </div>
      </div>
    );
  }
  return <h1>Styles loading...</h1>;
}

export default Styles;
