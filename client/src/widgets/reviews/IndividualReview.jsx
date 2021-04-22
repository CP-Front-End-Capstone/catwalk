/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Stars from '../../../src/stars.jsx'

const IndividualReview = (props) => {
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
    </div>
  );
};

export default IndividualReview;
