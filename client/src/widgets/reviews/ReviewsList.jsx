/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
// import Dropdown from 'react-bootstrap-dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import IndividualReview from './IndividualReview.jsx';
import reviewContext from '../../contexts/ReviewContext';
import api from '../../../../API/helper';

<<<<<<< HEAD
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
=======
const ReviewsList = () => {
  const reviewsInfo = useContext(reviewContext);
  const productId = reviewsInfo.reviewList.product;
  const [reviewsArray, setReviewsArray] = useState(reviewsInfo.reviewList.results);
  const [reviewCount, setReviewCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevant');
  const moreReviews = reviewCount > reviewsArray.length ? '' : 'More Reviews';

  const handleMoreReviews = (count) => {
    setReviewCount(count);
    api.fetchEndpoint(`/reviews/?product_id=${productId}&count=${count}&sort=relevant`)
      .then((reviewData) => {
        setReviewsArray(reviewData.results);
      });
  };

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
      <div>
        <button type="button" onClick={() => { handleMoreReviews(reviewCount + 2); }}>{moreReviews}</button>
        <button type="button">Add a Review +</button>
      </div>
    </div>

>>>>>>> cb40697e2bb44fe40cc908777ee6221dc0c5c186
  );
};
export default ReviewsList;
