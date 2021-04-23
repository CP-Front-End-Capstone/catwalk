/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
// import Dropdown from 'react-bootstrap-dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import IndividualReview from './IndividualReview.jsx';
import reviewContext from '../../contexts/ReviewContext';
import api from '../../../../API/helper';

const ReviewsList = () => {
  const reviewsInfo = useContext(reviewContext);
  const productId = reviewsInfo.reviewList.product;
  const [reviewsArray, setReviewsArray] = useState(reviewsInfo.reviewList.results);
  const [reviewCount, setReviewCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevant');

  const handleMoreReviews = (count) => {
    setReviewCount(count);
    api.fetchEndpoint(`/reviews/?product_id=${productId}&count=${count}&sort=relevant`)
      .then((reviewData) => {
        setReviewsArray(reviewData.results);
      });
  };

  const moreReviews = reviewCount > reviewsArray.length ? '' : <button type="button" onClick={() => { handleMoreReviews(reviewCount + 2); }}>More Reviews</button>;

  return (
    <div className="container">
      {reviewCount}
      {' '}
      reviews, sorted by
      {' '}
      relevance
      <div className="row h-75 overflow-auto">
        {reviewsArray.reverse().map((review) => (
          <ul key={review.review_id} className="container border">
            <reviewContext.Provider value={reviewCount}>
              <IndividualReview review={review} />
            </reviewContext.Provider>
          </ul>
        ))}
      </div>
      <div className="row">
        <div>{moreReviews}</div>
        <button type="button">Add a Review +</button>
      </div>
    </div>

  );
};
export default ReviewsList;
