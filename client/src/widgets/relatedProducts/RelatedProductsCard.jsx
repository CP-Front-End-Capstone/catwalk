/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
// import placeHolder from '../../placeholder.jpeg';
import ComparisonModal from './ComparisonModal.jsx';

function RelatedProductsCard({
  product, style, rating, currentProduct, review,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log('Review: ', review);
  // console.log('Rating: ', rating);
  return (
    // if (style.results[0].photos[0].thumbnail_url)
    <div>
      {/* style.results[0].photos[0].thumbnail_url ? style.results[0].photos[0].thumbnail_url : 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' */}
      <img className="card-img-top" src={style.results[0].photos[0].thumbnail_url ? style.results[0].photos[0].thumbnail_url : 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'} width={300} height={400} />
      {modalIsOpen ? <ComparisonModal updateModal={setModalIsOpen} product={product} currentProduct={currentProduct} /> : null}
      <button type="button" className="btn btn-primary float-right" onClick={() => setModalIsOpen(true)}>More Info</button>
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
        </div>
        <div className="card-subtitle">
          <StarRatings
            rating={review}
            starRatedColor="black"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="2px"
          />
        </div>
      </div>
    </div>
  );
}

export default RelatedProductsCard;
