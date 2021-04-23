/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import IndividualReview from './IndividualReview.jsx';
import reviewContext from '../../contexts/ReviewContext';

const ReviewsList = () => {
  const reviewsInfo = useContext(reviewContext);
  const reviewsArray = reviewsInfo.reviewList.results;
  return (
    <div className="container border">
      {reviewsArray.map((review) => (
        <ul key={review.review_id} className="border col-lg">
          <IndividualReview review={review} />
        </ul>
      ))}
      <div>
        <button type="button">More Reviews</button>
        <button type="button">Add a Review</button>
      </div>
    </div>

  );
};
export default ReviewsList;
