import React from 'react';
import IndividualReview from './IndividualReview.jsx';

const ReviewsList = (props) => (
  <div>
    {props.reviewList.map((review) => (
      <ul key={review.id}>
        <IndividualReview review={review} />
      </ul>
    ))}
  </div>
);

export default ReviewsList;
