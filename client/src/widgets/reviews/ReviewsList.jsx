import React, { useContext } from 'react';
import IndividualReview from './IndividualReview.jsx';
import productContext from '../../contexts/ProductContext';

const ReviewsList = (props) => {
  const reviews = useContext(productContext);

  return (
    <ul>
      {reviews.reviewList.results.map((review) => (
        <li key={review.review_id}>
          <IndividualReview review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
