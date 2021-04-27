/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
import IndividualReview from './IndividualReview.jsx';
import reviewContext from '../../contexts/ReviewContext';
import api from '../../../../API/helper';
import ReviewBreakDown from './ReviewBreakDown.jsx';
import AddReview from './AddReview.jsx';

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
        setReviewsArray(reviewData.results);
      })
      .catch((err) => {
        console.log('error fetching review data', err);
      })
  ), [sortBy]);

  const moreReviews = reviewCount > reviewsArray.length ? '' : <button type="button" onClick={() => { handleMoreReviews(reviewCount + 2); }}>More Reviews</button>;

  return (
    <div className="container">
      <h5 className="row">
        {displayedReviews.length}
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
            <a className="dropdown-item" href="#!" onClick={() => { handleSortBy('newest'); }}>Newest</a>
            <a className="dropdown-item" href="#!" onClick={() => { handleSortBy('relevant'); }}>Relevant</a>
            <a className="dropdown-item" href="#!" onClick={() => { handleSortBy('helpful'); }}>Helpful</a>
          </div>
        </div>
      </h5>
      <div className="row bg-light h-75 overflow-auto border" style={{ padding: '10px' }}>
        {displayedReviews.map((review) => (
          <ul key={review.review_id} className="container">
            <reviewContext.Provider value={reviewCount}>
              <IndividualReview review={review} />
            </reviewContext.Provider>
          </ul>
        ))}
      </div>
      <div className="row" style={{ padding: '10px' }}>
        <div>{moreReviews}</div>
        &nbsp;
        &nbsp;
        <button type="button" data-toggle="modal" data-target="#exampleModal">
          Add a Review +
        </button>
        <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <AddReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default ReviewsList;
