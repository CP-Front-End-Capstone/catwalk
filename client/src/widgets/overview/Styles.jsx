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
import React, { useContext, useState } from 'react';
import { productContext } from '../../contexts/ProductContext.js';

function Styles(props) {
  const { styles } = useContext(productContext);
  const handleClick = (e) => props.changeCurrentStyle(e.target.value);

  return (
    <div className="container ">
      <div className="row">
        <h5>
          Style
          :
          {styles[0].name}
        </h5>
      </div>
      <div className="row d-flex align-content-around flex-wrap row-cols-4">
        {styles.map((style) => (
          <div onClick={(e) => { handleClick(e.target.value); }} value={style.style_id}>
            <img
              className="img-thumbnail m-1"
              src={style.photos[0].thumbnail_url}
              alt="Thumbnail image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Styles;
