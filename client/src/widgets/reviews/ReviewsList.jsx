/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';
import IndividualReview from './IndividualReview.jsx';
import reviewContext from '../../contexts/ReviewContext';
import { productContext } from '../../contexts/ProductContext';
import api from '../../../../API/helper';
import ReviewBreakDown from './ReviewBreakDown.jsx';
import AddReview from './AddReview.jsx';
import ReviewSearch from './ReviewSearch.jsx';

const ReviewsList = () => {
  const reviewsInfo = useContext(reviewContext);
  const productInfo = useContext(productContext);
  const productId = reviewsInfo.reviewList.product;
  const { reviewsArray } = reviewsInfo;
  const { trackClicks } = productInfo;
  const { dateGenerator } = productInfo;
  const [reviewCount, setReviewCount] = useState(2);

  const handleMoreReviews = (count) => {
    setReviewCount(count);
    trackClicks('more reviews', 'reviews and ratings', dateGenerator());
  };

  const displayedReviews = reviewsArray.slice(0, reviewCount);

  const handleSortBy = (selection) => {
    reviewsInfo.setSortBy(selection);
    trackClicks('sort reviews', 'reviews and ratings', dateGenerator());
  };

  const moreReviews = reviewCount > reviewsArray.length ? '' : <button id="viewmore" type="button" onClick={() => { handleMoreReviews(reviewCount + 2); }}>More Reviews</button>;

  return (
    <div className="container" style={{ padding: '40px' }} key={productId}>
      <h5 className="row">
        <div>
          {reviewCount}
          {' '}
          reviews, sorted by&nbsp;
        </div>
        <div className="dropdown">
          <u
            className="dropdown-toggle"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {reviewsInfo.sortBy}
          </u>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a className="dropdown-item" href="#!" onClick={() => { handleSortBy('newest'); }}>Newest</a>
            <a className="dropdown-item" href="#!" onClick={() => { handleSortBy('relevant'); }}>Relevant</a>
            <a className="dropdown-item" href="#!" onClick={() => { handleSortBy('helpful'); }}>Helpful</a>
          </div>
        </div>
        <div className="col">
          {' '}
        </div>
        <div className="col-right">
          <ReviewSearch />
        </div>
      </h5>
      <div className="row bg-light h-75 overflow-auto border" style={{ padding: '10px' }} id="individualreview">
        {displayedReviews.map((review) => (
          <ul className="list-unstyled w-100" key={review.review_id}>
            <IndividualReview review={review} />
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
