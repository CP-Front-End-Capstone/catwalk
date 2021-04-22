import React, { useContext } from 'react';
import IndividualReview from './IndividualReview.jsx';
import productContext from '../../contexts/ProductContext';

const ReviewsList = (props) => {
  const reviews = useContext(productContext);
  return (

    <div>
      {reviews.reviewList.results.map((review) => (
        <ul key={review.review_id}>
          <IndividualReview review={review} />
        </ul>
      ))}
    </div>
  );
};

export default ReviewsList;
