/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import productContext from '../../contexts/ProductContext';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';
import api from '../../../../API/helper';

const dummyData = require('./dummydata.js');

const ReviewsRatings = () => {
  const selectedProduct = useContext(productContext);

  const [productId, setProductId] = useState(selectedProduct.productId);
  const [reviewList, setReviewList] = useState(selectedProduct.reviewList);
  const [sort, setSort] = useState('Relevant');
  const [addReview, setAddReview] = useState(null);
  const [reviewsMeta, setReviewsMeta] = useState(dummyData.dummyDataMeta);
  const [reviewCount, setReviewCount] = useState(2);

  return (
    <div>
      <h3>Reviews & Ratings</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            Average Review: Stars
          </div>
          <div className="col-sm">
            <div className="container">
              <div className="row">
                <ReviewsList />
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
    </div>
  );
};

export default ReviewsRatings;
