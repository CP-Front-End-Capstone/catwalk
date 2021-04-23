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

const ReviewsRatings = () => {
  const selectedProduct = useContext(productContext);

  const [productId, setProductId] = useState(selectedProduct.productId);
  const [reviewList, setReviewList] = useState({ results: [1, 2, 3] });
  const [reviewsMeta, setReviewsMeta] = useState();
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
  if (reviewsMeta) {
    return (
      <div>
        <h3>Reviews & Ratings</h3>
        <div className="container-fluid border">
          <div className="row">
            <div className="col-sm">
              <div className="container 25%">
                <reviewContext.Provider value={{ reviewsMeta }}>
                  <ReviewBreakDown />
                </reviewContext.Provider>
                <div className="row border">
                  Product Breakdown
                </div>
              </div>
            </div>
            <div className="col">
              <div className="container 75%">
                {reviewList.count}
                {' '}
                reviews, sorted by
                <div className="row">
                  <reviewContext.Provider value={{ reviewsMeta, reviewList }}>
                    <ReviewsList />
                  </reviewContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return 'Reviews are Loading ...';
};

export default ReviewsRatings;
