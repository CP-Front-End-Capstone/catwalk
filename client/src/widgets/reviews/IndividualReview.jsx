/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import StarRatings from 'react-star-ratings';
import dateFormat from 'dateformat';
import axios from 'axios';
import ReviewPhotos from './ReviewPhotos.jsx';

const config = require('../../../../API/config.js');

const IndividualReview = (props) => {
  const recommend = props.review.recommend && '✓ I recommend this product';
  const response = props.review.response && props.review.response;
  const longBody = props.review.body.length > 250 && true;

  const handleHelpfulness = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/${props.review.review_id}/helpful`, {
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then(() => {
        // reviewsInfo.setHelpful(true);
        console.log('put worked');
      })
      .catch((err) => {
        console.log('error putting helpfulness to API', props.review.review_id, err);
      });
  };

  const [reviewBody, setReviewBody] = useState(props.review.body.length < 250 ? props.review.body
    : (`${props.review.body.slice(0, 250)}...`));
  const [viewMore, setViewMore] = useState(longBody && 'View More');

  const handleViewMore = () => {
    setReviewBody(props.review.body);
    setViewMore(null);
  };

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
      <div className="row border" style={{ padding: '5px' }}>
        {reviewBody}
        <a href="#" className="small" onClick={() => { handleViewMore(); }}>
          {viewMore}
        </a>
      </div>
      <div className="row small">{recommend}</div>
      <div className="row">{response}</div>
      <div className="row">
        {' '}
        <ReviewPhotos photos={props.review.photos} />
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
