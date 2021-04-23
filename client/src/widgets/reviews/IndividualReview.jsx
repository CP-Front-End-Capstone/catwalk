/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const IndividualReview = (props) => {
  const recommend = props.review.recommend && '✓ I recommend this product';
  const response = props.review.response && props.review.response;

  return (
    <div>
      <span>
        <StarRatings
          rating={props.review.rating}
          starRatedColor="black"
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starSpacing="2px"
        />
      </span>
      <h5>{props.review.summary}</h5>
      <div className="border">{props.review.body}</div>
      <div>{recommend}</div>
      <div className="row">
        What this review helpful?
        <button type="foo">Yes</button>
        <div>({props.review.helpfulness})</div>
      </div>
    </div>
  );
};
export default IndividualReview;
