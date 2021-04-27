/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import reviewContext from '../../contexts/ReviewContext';
import RelatedProductsCard from './RelatedProductsCard.jsx';
// import productContext from '../../contexts/ProductContext.js';

function RelatedProductsList({
  products, styles, rating, currentProduct,
}) {
  const reviewMeta = useContext(reviewContext);
  // const [ratingAvg, setRatingAvg] = useState();

  // const relatedReviews = (review) => {
  //   const totalRatings = Number(review.recommended.true)
  //   + Number(review.recommended.false);

  //   const ratingsCountArray = (Object.values(review.ratings));
  //   const numbersArray = ratingsCountArray.map((number) => (
  //     Number(number)
  //   ));

  //   const avgCalc = ((Number((review.ratings[5])) * 5)
  //     + (Number((review.ratings[4])) * 4)
  //     + (Number((review.ratings[3])) * 3)
  //     + (Number((review.ratings[2])) * 2)
  //     + (Number((review.ratings[1])))) / totalRatings;

  //   const formattedAvg = Math.round(avgCalc * 10) / 10;

  //   setRatingAvg(formattedAvg);
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <Carousel itemsToShow={3} itemsToScroll={1}>
          {products.map((product, index) => (
            <div className="col-sm-12 col-lg-10" key={product.id}>
              <div className="card-group">
                <div className="card">
                  <RelatedProductsCard
                    product={product}
                    currentProduct={currentProduct}
                    style={styles[index]}
                    rating={rating}
                    review={rating}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default RelatedProductsList;
