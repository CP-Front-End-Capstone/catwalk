/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
// import Dropdown from 'react-bootstrap-dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import IndividualReview from './IndividualReview.jsx';
import reviewContext from '../../contexts/ReviewContext';
import api from '../../../../API/helper';

const ReviewsList = () => {
  const reviewsInfo = useContext(reviewContext);
  const productId = reviewsInfo.reviewList.product;
  const [reviewsList, setReviewsList] = useState(reviewsInfo.reviewList);
  const [reviewsArray, setReviewsArray] = useState(reviewsList.results);
  const [reviewCount, setReviewCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevant');

  const handleMoreReviews = (count) => {
    setReviewCount(count);
  };

  const displayedReviews = reviewsArray.slice(0, reviewCount);

  const handleSortBy = (selection) => {
    setSortBy(selection);
  };

  useEffect(() => (

    api.fetchEndpoint(`/reviews/?product_id=${productId}&count=100&sort=${sortBy}`)
      .then((reviewData) => {
        console.log('made it here');
        setReviewsArray(reviewData.results);
        displayedReviews = reviewData.results.slice(0, reviewCount);
      })
      .catch((err) => {
        console.log('error fetching review data', err);
      })
  ), [sortBy]);

  const moreReviews = reviewCount > reviewsArray.length ? '' : <button type="button" onClick={() => { handleMoreReviews(reviewCount + 2); }}>More Reviews</button>;

  return (
    <div className="container">
      <h5 className="row">
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
            <a className="dropdown-item" href="#!" value="newest" onClick={() => { handleSortBy('newest'); }}>Newest</a>
            <a className="dropdown-item" href="#!">relevant</a>
            <a className="dropdown-item" href="#!">helpful</a>
          </div>
        </div>
      </h5>
      <div className="row bg-light h-75 overflow-auto border">
        {displayedReviews.map((review) => (
          <ul key={review.review_id} className="container">
            <reviewContext.Provider value={reviewCount}>
              <IndividualReview review={review} />
            </reviewContext.Provider>
          </ul>
        ))}
      </div>
      <div className="row">
        <div>{moreReviews}</div>
        &nbsp;
        &nbsp;
        <button type="button">Add a Review +</button>
      </div>
    </div>

  );
};
export default ReviewsList;
