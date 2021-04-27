/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';

function ProductCard({ currentProduct, style, updateFit }) {
  return (
    <div className="card">
      <img className="card-img-top" src={style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'} width={300} height={400} />
      <div className="card-img-overlay">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => updateFit(false)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title">{currentProduct.category}</h5>
        <div className="card-text">
          <h6 className="card-subtitle mb-2 text-muted">{currentProduct.name}</h6>
        </div>
        <div className="card-text">
          <h6>
            $
            {currentProduct.default_price}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
