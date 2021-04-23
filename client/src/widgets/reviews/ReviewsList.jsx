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
      <div className="row">
        {reviewCount}
        {' '}
        reviews, sorted by&nbsp;
        <div className="dropdown">
          <u
            className="dropdown-toggle"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {sortBy}
          </u>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a className="dropdown-item" href="#!">newest</a>
            <a className="dropdown-item" href="#!">relevant</a>
            <a className="dropdown-item" href="#!">helpful</a>
          </div>
        </div>
      </div>
      <div className="row h-75 overflow-auto border">
        {reviewsArray.reverse().map((review) => (
          <ul key={review.review_id} className="container">
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
