/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
import StarRatings from 'react-star-ratings';
import reviewContext from '../../contexts/ReviewContext';
import { productContext } from '../../contexts/ProductContext';

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

  const handleRatingFilter = (rating) => {
    const selectedArray = selectedRating.slice();
    if (selectedRating.length === 5) {
      setSelectedRating([rating]);
    } else if (selectedArray.indexOf(rating) > -1) {
      if (selectedArray.length > 1) {
        selectedArray.splice(selectedArray.indexOf(rating), 1);
        setSelectedRating(selectedArray);
      } else {
        setSelectedRating(['1', '2', '3', '4', '5']);
      }
    } else {
      selectedArray.push(rating);
      setSelectedRating(selectedArray);
    }
  };

  console.log(selectedRating);

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
      <div>
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

        <div className="border small" style={{ padding: '20px' }}>
          <div>
            {recommendPercent}
            % of reviewers recommend this product
          </div>
          <span onClick={() => { handleRatingFilter('5'); }}>
            5 Stars
            <HSBar height={10} data={[{ value: fiveStars, color: 'black' }, { value: 100 - fiveStars, color: 'grey' }]} />
          </span>
          <span onClick={() => { handleRatingFilter('4'); }}>
            4 Stars
            <HSBar height={10} data={[{ value: fourStars, color: 'black' }, { value: 100 - fourStars, color: 'grey' }]} />
          </span>
          <span onClick={() => { handleRatingFilter('3'); }}>
            3 Stars
            <HSBar height={10} data={[{ value: threeStars, color: 'black' }, { value: 100 - threeStars, color: 'grey' }]} />
          </span>
          <span onClick={() => { handleRatingFilter('2'); }}>
            2 Stars
            <HSBar height={10} data={[{ value: twoStars, color: 'black' }, { value: 100 - twoStars, color: 'grey' }]} />
          </span>
          <span onClick={() => { handleRatingFilter('1'); }}>
            1 Star
            <HSBar height={10} data={[{ value: oneStar, color: 'black' }, { value: 100 - oneStar, color: 'grey' }]} />
          </span>
        </div>
      </div>

    );
  }
  return 'Review Breakdown is loading';
};
export default ReviewBreakDown;
