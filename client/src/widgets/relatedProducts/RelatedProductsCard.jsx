/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function RelatedProductsCard({ product, style }) {
  // console.log('HEllO from products card: ', product);
  return (
    <div className="col-xs-6">
      <div className="card">
        <img className="card-img-top" src="http://placekitten.com/g/200/300" />
        <div className="card-body">
          <div className="card-subtitle">
            <h5>{product.category}</h5>
          </div>
          <div className="card-text">
            <h6>{product.name}</h6>
          </div>
          <div className="card-text">
            {style.sale_price ? style.sale_price : 'sold out'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProductsCard;
