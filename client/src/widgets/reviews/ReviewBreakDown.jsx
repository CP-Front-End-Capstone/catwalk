import React, { useContext } from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
import StarRatings from 'react-star-ratings';
import reviewContext from '../../contexts/ReviewContext';

const ReviewBreakDown = (props) => {
  const reviewMeta = useContext(reviewContext);

  const totalRatings = Number(reviewMeta.reviewsMeta.recommended.true)
  + Number(reviewMeta.reviewsMeta.recommended.false);

  const recommendPercent = Math.round((Number(reviewMeta.reviewsMeta.recommended.true) * 100
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

  const fiveStars = (reviewMeta.reviewsMeta.ratings[5])
    ? (reviewMeta.reviewsMeta.ratings[5] * 100 / largestCount) : 0;
  const fourStars = (reviewMeta.reviewsMeta.ratings[4])
    ? (reviewMeta.reviewsMeta.ratings[4] * 100 / largestCount) : 0;
  const threeStars = (reviewMeta.reviewsMeta.ratings[3])
    ? (reviewMeta.reviewsMeta.ratings[3] * 100 / largestCount) : 0;
  const twoStars = (reviewMeta.reviewsMeta.ratings[2])
    ? (reviewMeta.reviewsMeta.ratings[2] * 100 / largestCount) : 0;
  const oneStar = (reviewMeta.reviewsMeta.ratings[1])
    ? (reviewMeta.reviewsMeta.ratings[1] * 100 / largestCount) : 0;

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

        <div className="border">
          <div>
            {recommendPercent}
            % of reviewers recommend this product
          </div>
          <div>
            5 Stars
            <HSBar data={[{ value: fiveStars, color: 'black' }, { value: 100 - fiveStars, color: 'grey' }]} />
          </div>
          <div>
            4 Stars
            <HSBar data={[{ value: fourStars, color: 'black' }, { value: 100 - fourStars, color: 'grey' }]} />
          </div>
          <div>
            3 Stars
            <HSBar data={[{ value: threeStars, color: 'black' }, { value: 100 - threeStars, color: 'grey' }]} />
          </div>
          <div>
            2 Stars
            <HSBar data={[{ value: twoStars, color: 'black' }, { value: 100 - twoStars, color: 'grey' }]} />
          </div>
          <div>
            1 Star
            <HSBar data={[{ value: oneStar, color: 'black' }, { value: 100 - oneStar, color: 'grey' }]} />
          </div>
        </div>
      </div>

    );
  }
  return 'Review Breakdown is loading';
};
export default ReviewBreakDown;
