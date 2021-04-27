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

const ReviewsRatings = () => {
  const selectedProduct = useContext(productContext);

  const [productId, setProductId] = useState(selectedProduct.productId);
  const [reviewList, setReviewList] = useState({ results: [1, 2, 3] });
  const [reviewsMeta, setReviewsMeta] = useState();
  const [isMounted, setIsMounted] = useState();
  const [ratingFilter, setRatingFilter] = useState();
  const [helpful, setHelpful] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/reviews/?product_id=${productId}&count=100&sort=relevant`)
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
  }, [productId]);

  if (reviewsMeta) {
    return (
      <div>
        <div className="container border" style={{ padding: '20px' }}>
          <h3>Reviews & Ratings</h3>
          <div className="row">
            <div className="col-sm-4">
              <div className="container">
                <div className="row">
                  <reviewContext.Provider value={{ reviewsMeta, reviewList }}>
                    <ReviewBreakDown />
                    <ProductBreakDown />
                  </reviewContext.Provider>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row" style={{ height: '650px' }}>
                <reviewContext.Provider value={{ reviewsMeta, reviewList}}>
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
