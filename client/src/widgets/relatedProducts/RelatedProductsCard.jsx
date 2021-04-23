/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';

function RelatedProductsCard({ product, style }) {
  // console.log('HEllO from products card: ', currentStyles);

  return (
    <div className="col-sm">
      <div className="card">
        <img className="card-img-top" src={style.results[0].photos[0].thumbnail_url} />
        <div className="card-body">
          <h5 className="card-title">{product.category}</h5>
          <div className="card-text">
            <h6>{product.name}</h6>
          </div>
          <div className="card-text">
            <h6>{product.default_price}</h6>
            {/* {style.sale_price ? style.sale_price : 'sold out'} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProductsCard;
