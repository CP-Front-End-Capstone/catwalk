import React, { useContext } from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
import reviewContext from '../../contexts/ReviewContext';

const ReviewBreakDown = (props) => {
  const reviewMeta = useContext(reviewContext);

  const totalRatings = Number(reviewMeta.reviewsMeta.recommended.true)
  + Number(reviewMeta.reviewsMeta.recommended.false);

  const recommendPercent = Number(reviewMeta.reviewsMeta.recommended.true) * 100
  / (totalRatings);

  const fiveStars = (reviewMeta.reviewsMeta.ratings[5])
    ? (reviewMeta.reviewsMeta.ratings[5] * 100 / totalRatings) : 0;
  const fourStars = (reviewMeta.reviewsMeta.ratings[4])
    ? (reviewMeta.reviewsMeta.ratings[4] * 100 / totalRatings) : 0;
  const threeStars = (reviewMeta.reviewsMeta.ratings[3])
    ? (reviewMeta.reviewsMeta.ratings[3] * 100 / totalRatings) : 0;
  const twoStars = (reviewMeta.reviewsMeta.ratings[2])
    ? (reviewMeta.reviewsMeta.ratings[2] * 100 / totalRatings) : 0;
  const oneStar = (reviewMeta.reviewsMeta.ratings[1])
    ? (reviewMeta.reviewsMeta.ratings[1] * 100 / totalRatings) : 0;

  if (recommendPercent) {
    return (

      <div>
        <div>
          {recommendPercent}
          % of reviews recommend this product
        </div>
        <div>
          5 Stars
          <HSBar data={[{value: fiveStars, color: 'black' }, { value: 100 - fiveStars, color: 'grey' }]} />
        </div>
        <div>
          4 Stars
          <HSBar data={[{value: fourStars, color: 'black' }, { value: 100 - fourStars, color: 'grey' }]} />
        </div>
        <div>
          3 Stars
          <HSBar data={[{value: threeStars, color: 'black' }, { value: 100 - threeStars, color: 'grey' }]} />
        </div>
        <div>
          2 Stars
          <HSBar data={[{value: twoStars, color: 'black' }, { value: 100 - twoStars, color: 'grey' }]} />
        </div>
        <div>
          1 Star
          <HSBar data={[{value: oneStar, color: 'black' }, { value: 100 - oneStar, color: 'grey' }]} />
        </div>
      </div>
    );
  }
  return 'Review Breakdown is loading';
};
export default ReviewBreakDown;
