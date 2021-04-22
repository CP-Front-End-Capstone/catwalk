/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import productContext from '../../contexts/ProductContext';
import reviewContext from '../../contexts/ReviewContext';
import ReviewsList from './ReviewsList.jsx';
import ReviewBreakDown from './ReviewBreakDown.jsx';
import AddReview from './AddReview.jsx';
import api from '../../../../API/helper';

const dummyData = require('./dummydata.js');

const ReviewsRatings = () => {
  const selectedProduct = useContext(productContext);

  const [productId, setProductId] = useState(selectedProduct.productId);
  const [reviewList, setReviewList] = useState({ results: [1, 2, 3] });
  const [reviewsMeta, setReviewsMeta] = useState(dummyData.dummyDataMeta);
  const [isMounted, setIsMounted] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/reviews/?product_id=${productId}&count=2&sort=relevant`)
      .then((reviewData) => {
        setReviewList(reviewData);
        api.fetchEndpoint(`/reviews/meta/?product_id=${productId}`)
          .then((reviewMeta) => {
            setReviewsMeta(reviewMeta);
          });
      })
      .catch((err) => {
        console.log('error fetching review data', err);
      });
  }, []);

  return (
    <div>
      <h3>Reviews & Ratings</h3>
      <div className="container border">
        <div className="row">
          <div className="col-sm">
            <h5>
              Avg:Average Stars
            </h5>
            <div className="container">
              <div className="row border">
                <div className="col-sm">
                  <reviewContext.Provider value={{ reviewsMeta }}>
                    <ReviewBreakDown />
                  </reviewContext.Provider>
                </div>
              </div>
              <div className="row border">
                <div className="col-sm">
                  Product Breakdown
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            {reviewList.count}
            {' '}
            reviews, sorted by
            <div className="row">
              <reviewContext.Provider value={{ reviewsMeta, reviewList }}>
                <ReviewsList />
              </reviewContext.Provider>
              <div className="col-sm">
                <button type="button">More Reviews</button>
              </div>
              <div className="col-sm">
                <button type="button">Add a Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsRatings;
