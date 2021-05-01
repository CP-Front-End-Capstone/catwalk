/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { productContext } from '../../contexts/ProductContext.js';
import reviewContext from '../../contexts/ReviewContext.js';
import ReviewsList from './ReviewsList.jsx';
import ReviewBreakDown from './ReviewBreakDown.jsx';
import ProductBreakDown from './ProductBreakDown.jsx';
import AddReview from './AddReview.jsx';
import api from '../../../../API/helper';

const ReviewsRatings = (props) => {
  const { reviewsMeta, productId } = useContext(productContext);
  const [reviewList, setReviewList] = useState();
  const [reviewsArray, setReviewsArray] = useState();
  const [isMounted, setIsMounted] = useState();
  const [ratingFilter, setRatingFilter] = useState();
  const [helpful, setHelpful] = useState();
  const [sortBy, setSortBy] = useState('relevant');

  useEffect(() => {
    api.fetchEndpoint(`/reviews/?product_id=${productId}&count=100&sort=${sortBy}`)
      .then((reviewData) => {
        setReviewList(reviewData);
        setReviewsArray(reviewData.results);
      })
      .catch((err) => {
        console.log('error fetching review data', err);
      });
  }, [productId, sortBy]);

  if (reviewsMeta && reviewList) {
    props.getTotalReviews(reviewsArray);
    return (
      <div id="reviews">
        <div className="container" style={{ padding: '20px' }}>
          <h4 className="font-weight-light">REVIEWS & RATINGS</h4>
          <div className="row">
            <div className="col-sm-4">
              <div className="container">
                <div className="row">
                  <reviewContext.Provider value={{
                    reviewList, reviewsArray, setReviewsArray,
                  }}
                  >
                    <ReviewBreakDown />
                    <ProductBreakDown />
                  </reviewContext.Provider>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row" style={{ height: '650px' }}>
                <reviewContext.Provider value={{
                  reviewList, reviewsArray, setReviewsArray, setReviewList, setSortBy, sortBy,
                }}
                >
                  <ReviewsList />
                </reviewContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Reviews are Loading ...</div>;
};

export default ReviewsRatings;
