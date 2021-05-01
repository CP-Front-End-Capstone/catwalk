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
  const { trackClicks } = product;
  const { dateGenerator } = product;
  const [selectedRating, setSelectedRating] = useState(['1', '2', '3', '4', '5']);
  // const ratingsCountArray = (Object.values(product.reviewsMeta.ratings));
  // const numbersArray = ratingsCountArray.map((number) => (
  //   Number(number)
  // ));
  // const largestCount = Math.max(...numbersArray);

  const filterArray = (ratings) => {
    const filteredReviews = review.reviewList.results.filter((rev) => (
      ratings.indexOf(JSON.stringify(rev.rating)) > -1));
    review.setReviewsArray(filteredReviews);
  };

  const handleRatingFilter = (rating) => {
    trackClicks('ratings breakdown', 'reviews and ratings', dateGenerator());
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

  const five = (product.reviewsMeta.ratings[5])
    ? (product.reviewsMeta.ratings[5]) : 0;
  const four = (product.reviewsMeta.ratings[4])
    ? (product.reviewsMeta.ratings[4]) : 0;
  const three = (product.reviewsMeta.ratings[3])
    ? (product.reviewsMeta.ratings[3]) : 0;
  const two = (product.reviewsMeta.ratings[2])
    ? (product.reviewsMeta.ratings[2]) : 0;
  const one = (product.reviewsMeta.ratings[1])
    ? (product.reviewsMeta.ratings[1]) : 0;

  const totalRatings = Number(five) + Number(four)
  + Number(three) + Number(two) + Number(one);

  const fiveStars = (product.reviewsMeta.ratings[5])
    ? ((product.reviewsMeta.ratings[5] * 100) / totalRatings) : 0;
  const fourStars = (product.reviewsMeta.ratings[4])
    ? ((product.reviewsMeta.ratings[4] * 100) / totalRatings) : 0;
  const threeStars = (product.reviewsMeta.ratings[3])
    ? ((product.reviewsMeta.ratings[3] * 100) / totalRatings) : 0;
  const twoStars = (product.reviewsMeta.ratings[2])
    ? ((product.reviewsMeta.ratings[2] * 100) / totalRatings) : 0;
  const oneStar = (product.reviewsMeta.ratings[1])
    ? ((product.reviewsMeta.ratings[1] * 100) / totalRatings) : 0;

  const recommendPercent = product.reviewsMeta.recommended.true
    ? Math.round(((Number(product.reviewsMeta.recommended.true) * 100)
    / (totalRatings)) * 10) / 10 : 0;

  if (recommendPercent) {
    return (
      <div className="container" style={{ padding: '0px' }} key={product.reviewsMeta.product_id}>
        <div className="row">
          <h1>
            <Stars />
          </h1>
        </div>
        <div className="container" style={{ padding: '10px', width: '100%' }}>
          <div className="row">
            <div className="font-weight-bold" style={{ padding: '2px' }}>
              {recommendPercent}
              % of reviewers recommend this product
            </div>
            <div id="starratings">
              <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('5'); }}>
                <div className="row" style={{ padding: '8px' }}>
                  <div className="col-2 text-left font-weight-bold" style={{ padding: '1px' }}>
                    5 Stars
                    {' '}
                  </div>
                  <div className="col-9 text-right" style={{ padding: '1px' }}>
                    <HSBar height={10} data={[{ value: fiveStars, color: 'green' }, { value: 100 - fiveStars, color: 'grey' }]} />
                  </div>
                  <div className="col-1 text-center" style={{ padding: '1px' }}>
                    {five}
                  </div>
                </div>
              </button>
              <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('4'); }}>
                <div className="row" style={{ padding: '8px' }}>
                  <div className="col-2 text-left font-weight-bold" style={{ padding: '1px' }}>
                    4 Stars
                    {' '}
                  </div>
                  <div className="col-9 text-right" style={{ padding: '1px' }}>
                    <HSBar height={10} data={[{ value: fourStars, color: 'green' }, { value: 100 - fourStars, color: 'grey' }]} />
                  </div>
                  <div className="col-1 text-center" style={{ padding: '1px' }}>
                    {four}
                  </div>
                </div>
              </button>
              <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('4'); }}>
                <div className="row" style={{ padding: '8px' }}>
                  <div className="col-2 text-left font-weight-bold" style={{ padding: '1px' }}>
                    3 Stars
                    {' '}
                  </div>
                  <div className="col-9 text-right" style={{ padding: '1px' }}>
                    <HSBar height={10} data={[{ value: threeStars, color: 'green' }, { value: 100 - threeStars, color: 'grey' }]} />
                  </div>
                  <div className="col-1 text-center" style={{ padding: '1px' }}>
                    {three}
                  </div>
                </div>
              </button>
              <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('4'); }}>
                <div className="row" style={{ padding: '8px' }}>
                  <div className="col-2 text-left font-weight-bold" style={{ padding: '1px' }}>
                    2 Stars
                    {' '}
                  </div>
                  <div className="col-9 text-right" style={{ padding: '1px' }}>
                    <HSBar height={10} data={[{ value: twoStars, color: 'green' }, { value: 100 - twoStars, color: 'grey' }]} />
                  </div>
                  <div className="col-1 text-center" style={{ padding: '1px' }}>
                    {two}
                  </div>
                </div>
              </button>
              <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('5'); }}>
                <div className="row" style={{ padding: '8px' }}>
                  <div className="col-2 text-left font-weight-bold" style={{ padding: '1px' }}>
                    1 Star &nbsp;
                    {' '}
                  </div>
                  <div className="col-9 text-right" style={{ padding: '1px' }}>
                    <HSBar height={10} data={[{ value: oneStar, color: 'green' }, { value: 100 - oneStar, color: 'grey' }]} />
                  </div>
                  <div className="col-1 text-center" style={{ padding: '1px' }}>
                    {one}
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="row small">{currentFilter}</div>
        </div>
      </div>

    );
  }
  if (!totalRatings) {
    return 'There are no reviews at this time. Be first to review!';
  }
  return 'Review Breakdown is loading';
};
export default ReviewBreakDown;
