/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';

function RelatedProductsCard({ product, style }) {
  console.log('HEllO from products card: ', style.result);

  return (
    // if (style.results[0].photos[0].thumbnail_url)
    <div>
      <img className="card-img-top" src={style.results[0].photos[0].thumbnail_url ? style.results[0].photos[0].thumbnail_url : 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'} width={300} height={400} />
      <button type="button" className="btn btn-outline-primary float-right">More Info</button>
      <div className="card-body">
        <h5 className="card-title">{product.category}</h5>
        <div className="card-text">
          <h6 className="card-subtitle mb-2 text-muted">{product.name}</h6>
        </div>
        <div className="card-text">
          <h6>
            {style.results[0].sale_price ? 'Sale: ' : 'Original Price: '}
            $
            {style.results[0].sale_price ? style.results[0].sale_price : style.results[0].original_price}
          </h6>
          {/* {style.sale_price ? style.sale_price : 'sold out'} */}
        </div>
      </div>
    </div>
  );
}

export default RelatedProductsCard;
