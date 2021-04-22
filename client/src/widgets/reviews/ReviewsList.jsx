/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import IndividualReview from './IndividualReview.jsx';
import reviewContext from '../../contexts/ReviewContext';

const ReviewsList = () => {
  const reviewsInfo = useContext(reviewContext);
  const reviewsArray = reviewsInfo.reviewList.results;
  return (
    <div>
      {reviewsArray.map((review) => (
        <ul key={review.review_id} className="border">
          <IndividualReview review={review} />
        </ul>
      ))}
    </div>

  );
};
export default ReviewsList;
