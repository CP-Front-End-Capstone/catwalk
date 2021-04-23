/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const IndividualReview = (props) => {
<<<<<<< HEAD
  const [recommend, setRecommend] = useState();
  if (props.review.recommend) {
    setRecommend('I recommend this product');
  }
  return (
    <div>
      <span><Stars /></span>
      <h5>{props.review.summary}</h5>
      <div>{props.review.body}</div>
      <div>{recommend}</div>
=======
  const recommend = props.review.recommend && '✓ I recommend this product';
  const response = props.review.response && props.review.response;


  return (
    <div className="container">
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
        </div>
      </div>
      <h5 className="row">{props.review.summary}</h5>
      <div className="row border">{props.review.body}</div>
      <div className="row border">{response}</div>
      <div className="row small">{recommend}</div>
      <div className="row small">
        What this review helpful?
        <button type="button">Yes</button>
        <div>
          (
          {props.review.helpfulness}
          )
        </div>
      </div>
>>>>>>> cb40697e2bb44fe40cc908777ee6221dc0c5c186
    </div>
  );
};
export default IndividualReview;
