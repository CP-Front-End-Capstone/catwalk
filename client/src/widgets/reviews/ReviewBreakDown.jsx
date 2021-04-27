/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
import StarRatings from 'react-star-ratings';
import reviewContext from '../../contexts/ReviewContext';
import { productContext } from '../../contexts/ProductContext';
// import Styles from '../../../dist/styles.css';

const ReviewBreakDown = () => {
  const reviewMeta = useContext(reviewContext);
  const [selectedRating, setSelectedRating] = useState(['1', '2', '3', '4', '5']);

  const totalRatings = Number(reviewMeta.reviewsMeta.recommended.true)
  + Number(reviewMeta.reviewsMeta.recommended.false);

  const recommendPercent = Math.round(((Number(reviewMeta.reviewsMeta.recommended.true) * 100)
  / (totalRatings)) * 10) / 10;

  const ratingsCountArray = (Object.values(reviewMeta.reviewsMeta.ratings));
  const numbersArray = ratingsCountArray.map((number) => (
    Number(number)
  ));
  const largestCount = Math.max(...numbersArray);

  const avgCalc = ((Number((reviewMeta.reviewsMeta.ratings[5])) * 5)
    + (Number((reviewMeta.reviewsMeta.ratings[4])) * 4)
    + (Number((reviewMeta.reviewsMeta.ratings[3])) * 3)
    + (Number((reviewMeta.reviewsMeta.ratings[2])) * 2)
    + (Number((reviewMeta.reviewsMeta.ratings[1])))) / totalRatings;

  const formattedAvg = Math.round(avgCalc * 10) / 10;

  const passStars = useContext(productContext);

  passStars.changeStarAvg(formattedAvg);

  const filterArray = (ratings) => {
    const filteredReviews = reviewMeta.reviewList.results.filter((review) => (
      ratings.indexOf(JSON.stringify(review.rating)) > -1));
      console.log(filteredReviews);
      console.log(ratings);
    reviewMeta.setReviewsArray(filteredReviews);
  };

  const handleRatingFilter = (rating) => {
    const selectedArray = selectedRating.slice();
    if (selectedArray.length === 5) {
      setSelectedRating([rating]);
      filterArray([rating]);
    } else if (selectedArray.indexOf(rating) > -1) {
      if (selectedArray.length > 1) {
        const newSelected = selectedArray.splice(selectedArray.indexOf(rating), 1);
        setSelectedRating(newSelected);
        filterArray(newSelected);
      } else {
        setSelectedRating(['1', '2', '3', '4', '5']);
        reviewMeta.setReviewsArray(reviewMeta.reviewList.results);
      }
    } else {
      const otherSelected = selectedArray.concat(rating);
      setSelectedRating(otherSelected);
      filterArray(otherSelected);
    }
  };


  const currentFilter = selectedRating.length !== 5 && `Currently selected ratings: ${selectedRating}`;

  const fiveStars = (reviewMeta.reviewsMeta.ratings[5])
    ? ((reviewMeta.reviewsMeta.ratings[5] * 100) / largestCount) : 0;
  const fourStars = (reviewMeta.reviewsMeta.ratings[4])
    ? ((reviewMeta.reviewsMeta.ratings[4] * 100) / largestCount) : 0;
  const threeStars = (reviewMeta.reviewsMeta.ratings[3])
    ? ((reviewMeta.reviewsMeta.ratings[3] * 100) / largestCount) : 0;
  const twoStars = (reviewMeta.reviewsMeta.ratings[2])
    ? ((reviewMeta.reviewsMeta.ratings[2] * 100) / largestCount) : 0;
  const oneStar = (reviewMeta.reviewsMeta.ratings[1])
    ? ((reviewMeta.reviewsMeta.ratings[1] * 100) / largestCount) : 0;

  if (recommendPercent) {
    return (
      <div className="container" style={{ padding: '10px' }}>
        <div className="row">
          <h1>
            {formattedAvg}
            {' '}
            <StarRatings
              rating={formattedAvg}
              starRatedColor="black"
              numberOfStars={5}
              name="rating"
              starDimension="30px"
            />
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
            {reviewMeta.reviewsMeta.ratings[5]}
            <HSBar height={10} data={[{ value: fiveStars, color: 'black' }, { value: 100 - fiveStars, color: 'grey' }]} />
          </button>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('4'); }}>
            4 Stars
            {' '}
            {reviewMeta.reviewsMeta.ratings[4]}
            <HSBar height={10} data={[{ value: fourStars, color: 'black' }, { value: 100 - fourStars, color: 'grey' }]} />
          </button>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('3'); }}>
            3 Stars
            {' '}
            {reviewMeta.reviewsMeta.ratings[3]}
            <HSBar height={10} data={[{ value: threeStars, color: 'black' }, { value: 100 - threeStars, color: 'grey' }]} />
          </button>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('2'); }}>
            2 Stars
            {' '}
            {reviewMeta.reviewsMeta.ratings[2]}
            <HSBar height={10} data={[{ value: twoStars, color: 'black' }, { value: 100 - twoStars, color: 'grey' }]} />
          </button>
          <button type="button" className="text-left btn-light small" onClick={() => { handleRatingFilter('1'); }}>
            1 Star
            {' '}
            {reviewMeta.reviewsMeta.ratings[1]}
            <HSBar height={10} data={[{ value: oneStar, color: 'black' }, { value: 100 - oneStar, color: 'grey' }]} />
          </button>
        </div>
        <div className="row small">{currentFilter}</div>
      </div>

    );
  }
  return 'Review Breakdown is loading';
};
export default ReviewBreakDown;
