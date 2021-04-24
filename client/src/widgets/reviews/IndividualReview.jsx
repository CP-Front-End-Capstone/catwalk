/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import StarRatings from 'react-star-ratings';
import dateFormat from 'dateformat';
import axios from 'axios';
import reviewContext from '../../contexts/ReviewContext';

const IndividualReview = (props) => {
  const recommend = props.review.recommend && '✓ I recommend this product';
  const response = props.review.response && props.review.response;
  const reviewsInfo = useContext(reviewContext);

  const images = props.review.photos.length > 0 && 'Image';

  const handleHelpfulness = () => {
    axios.put(`/reviews/${props.review.review_id}/helpful`)
      .then(() => {
        reviewsInfo.setHelpful(true);
      })
      .catch((err) => {
        console.log('error putting helpfulness to API', err);
      });
  };

  console.log('this is the date', props.review.date);

  return (
    <div className="container bg-white border">
      <div className="row">
        <span className="col-sm">

          <StarRatings
            rating={props.review.rating}
            starRatedColor="black"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="2px"
          />
        </span>
        <div className="col-sm text-right small">
          {props.review.reviewer_name}
          &nbsp;
          &nbsp;
          &nbsp;
          {dateFormat(props.review.date, 'mmmm dS, yyyy', true)}
        </div>
      </div>
      <h5 className="row">{props.review.summary}</h5>
      <div className="row border" style={{ padding: '5px' }}>{props.review.body}</div>
      <div className="row small">{recommend}</div>
      <div className="row">{response}</div>
      <div className="row">
        {' '}
        {images}
        {' '}
      </div>
      <div className="row small">
        What this review helpful?
        <a href="#" onClick={() => { handleHelpfulness(); }}>
        &nbsp;
          Yes
        &nbsp;
        </a>
        <div>
          (
          {props.review.helpfulness}
          )
        </div>
        <a href="#" onClick={() => { handleHelpfulness(); }}>
         &nbsp;
          Report
        </a>
      </div>
    </div>
  );
};
export default IndividualReview;
