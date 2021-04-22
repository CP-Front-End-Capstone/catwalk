/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import productContext from '../../contexts/ProductContext';
import ReviewsList from './ReviewsList.jsx';
import ReviewBreakDown from './ReviewBreakDown.jsx';
import AddReview from './AddReview.jsx';
import api from '../../../../API/helper';

const dummyData = require('./dummydata.js');

const ReviewsRatings = () => {
  const selectedProduct = useContext(productContext);

  const [productId, setProductId] = useState(selectedProduct.productId);
  const [sort, setSort] = useState('Relevant');
  const [addReview, setAddReview] = useState(null);
  const [reviewList, setReviewList] = useState({ results: [] });
  const [reviewsMeta, setReviewsMeta] = useState(dummyData.dummyDataMeta);
  const [reviewCount, setReviewCount] = useState(2);
  console.log(selectedProduct);

  useEffect(() => {
    api.fetchEndpoint(`/reviews/?product_id=${productId}&count=2&sort=relevant`)
      .then((reviewData) => {
        setReviewList(reviewData);
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
                  <ReviewBreakDown />
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
              <ReviewsList selectedProduct={reviewList} />
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
