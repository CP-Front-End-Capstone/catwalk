import React from 'react';
import reviewContext, { useContext } from '../../contexts.ReviewContext.jsx';

const totalReviews = () => {
  const reviews = useContext(reviewContext);
  const { reviewsArray } = reviews;

  console.log(reviewsArray);

  return(
    reviewsArray.length;

  )
};

export default totalReviews;
