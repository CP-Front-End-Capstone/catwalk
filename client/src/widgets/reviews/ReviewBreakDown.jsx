import React, { useContext } from 'react';
import reviewContext from '../../contexts/ReviewContext';

const ReviewBreakDown = (props) => {
  const reviewMeta = useContext(reviewContext);

  const totalRatings = Number(reviewMeta.reviewsMeta.recommended.true)
  + Number(reviewMeta.reviewsMeta.recommended.false);

  const recommendPercent = Number(reviewMeta.reviewsMeta.recommended.true) * 100
  / (totalRatings);
  console.log(recommendPercent);
  console.log(totalRatings);

  if (recommendPercent) {
    return (

      <div>
        <div>
          {recommendPercent}
          % of reviews recommend this product
        </div>
        <div>5 Stars</div>
        <div>4 Stars</div>
        <div>3 Stars</div>
        <div>2 Stars</div>
        <div>1 Stars</div>

      </div>
    );
  }
  return 'Review Breakdown is loading';
};
export default ReviewBreakDown;
