/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
// import StarRatings from 'react-star-ratings';
import reviewContext from '../../contexts/ReviewContext';
import { productContext } from '../../contexts/ProductContext.js';
import Stars from '../../Stars.jsx';

const ReviewBreakDown = () => {
  const review = useContext(reviewContext);
  const product = useContext(productContext);
  const [selectedRating, setSelectedRating] = useState(['1', '2', '3', '4', '5']);

  const totalRatings = Number(product.reviewsMeta.recommended.true)
  + Number(product.reviewsMeta.recommended.false);

  const recommendPercent = Math.round(((Number(product.reviewsMeta.recommended.true) * 100)
  / (totalRatings)) * 10) / 10;

  const ratingsCountArray = (Object.values(product.reviewsMeta.ratings));
  const numbersArray = ratingsCountArray.map((number) => (
    Number(number)
  ));
  const largestCount = Math.max(...numbersArray);

  const filterArray = (ratings) => {
    const filteredReviews = review.reviewList.results.filter((rev) => (
      ratings.indexOf(JSON.stringify(rev.rating)) > -1));
    review.setReviewsArray(filteredReviews);
  };

  const handleRatingFilter = (rating) => {
    const selectedArray = selectedRating.slice();
    if (selectedArray.length === 5) {
      setSelectedRating([rating]);
      filterArray([rating]);
    } else if (selectedArray.indexOf(rating) > -1) {
      if (selectedArray.length > 1) {
        selectedArray.splice(selectedArray.indexOf(rating), 1);
        setSelectedRating(selectedArray);
        filterArray(selectedArray);
      } else {
        setSelectedRating(['1', '2', '3', '4', '5']);
        review.setReviewsArray(review.reviewList.results);
      }
    } else {
      const otherSelected = selectedArray.concat(rating);
      setSelectedRating(otherSelected);
      filterArray(otherSelected);
    }
  };

  const currentFilter = selectedRating.length !== 5 && `Currently selected ratings: ${selectedRating}`;

  const fiveStars = (product.reviewsMeta.ratings[5])
    ? ((product.reviewsMeta.ratings[5] * 100) / largestCount) : 0;
  const fourStars = (product.reviewsMeta.ratings[4])
    ? ((product.reviewsMeta.ratings[4] * 100) / largestCount) : 0;
  const threeStars = (product.reviewsMeta.ratings[3])
    ? ((product.reviewsMeta.ratings[3] * 100) / largestCount) : 0;
  const twoStars = (product.reviewsMeta.ratings[2])
    ? ((product.reviewsMeta.ratings[2] * 100) / largestCount) : 0;
  const oneStar = (product.reviewsMeta.ratings[1])
    ? ((product.reviewsMeta.ratings[1] * 100) / largestCount) : 0;

  if (recommendPercent) {
    return (
      <div className="container" style={{ padding: '10px' }} key={product.reviewsMeta.product_id}>
        <div className="row">
          <h1>
            <Stars />
          </h1>
        </div>

        <div className="container border" style={{ padding: '20px' }}>
          <div className="font-weight-bold small">
            {recommendPercent}
            % of reviewers recommend this product
          </div>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('5'); }}>
            5 Stars
            {' '}
            {product.reviewsMeta.ratings[5]}
            <HSBar height={10} data={[{ value: fiveStars, color: 'black' }, { value: 100 - fiveStars, color: 'grey' }]} />
          </button>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('4'); }}>
            4 Stars
            {' '}
            {product.reviewsMeta.ratings[4]}
            <HSBar height={10} data={[{ value: fourStars, color: 'black' }, { value: 100 - fourStars, color: 'grey' }]} />
          </button>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('3'); }}>
            3 Stars
            {' '}
            {product.reviewsMeta.ratings[3]}
            <HSBar height={10} data={[{ value: threeStars, color: 'black' }, { value: 100 - threeStars, color: 'grey' }]} />
          </button>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('2'); }}>
            2 Stars
            {' '}
            {product.reviewsMeta.ratings[2]}
            <HSBar height={10} data={[{ value: twoStars, color: 'black' }, { value: 100 - twoStars, color: 'grey' }]} />
          </button>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('1'); }}>
            1 Star
            {' '}
            {product.reviewsMeta.ratings[1]}
            <HSBar height={10} data={[{ value: oneStar, color: 'black' }, { value: 100 - oneStar, color: 'grey' }]} />
          </button>
        </div>
        <div className="row small">{currentFilter}</div>
      </div>

    );
  }
  if (!totalRatings) {
    return 'There are no reviews at this time. Be first to review!';
  }
  return 'Review Breakdown is loading';
};
export default ReviewBreakDown;
