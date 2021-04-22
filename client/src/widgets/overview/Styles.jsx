/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext.js';

function Styles(props) {
  const { styles } = useContext(ProductContext);
  console.log(styles);
  return (
    <div>
      {/* {styles.map((style) => (
        <div className="container">
          <img className="img-thumbnail" src={style.photos[0].thumbnail_url} alt="Thumbnail image" />
        </div>
      ))} */}
      <h1>Hello Style</h1>
    </div>
  );
}

export default Styles;
