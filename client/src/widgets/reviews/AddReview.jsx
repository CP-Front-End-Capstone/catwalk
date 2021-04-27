/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-const-assign */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { productContext } from '../../contexts/ProductContext.js';
import reviewContext from '../../contexts/ReviewContext';

const AddReview = () => {
  const product = useContext(productContext);
  const reviewMeta = useContext(reviewContext);
  const ratings = {
    1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great',
  };
  const productId = product.product.product_id;
  const [recommend, setRecommend] = useState(null);
  const [starRating, setRating] = useState(0);
  const [reviewSummary, setReviewSummary] = useState(null);
  const [reviewBody, setReviewBody] = useState(null);
  const [images, setImages] = useState(null);
  const selectedRating = starRating > 0 && ratings[starRating];
  const characteristics = {};
  const [reviewName, setReviewName] = useState(null);
  const [reviewerEmail, setReviewerEmail] = useState(null);
  const [summaryCount, setSummaryCount] = useState(60);
  const [bodyCount, setBodyCount] = useState(0);

  const handleFileChange = (input) => {
    console.log(input);
  };

  const handleReviewSummary = (input) => {
    setReviewSummary(input);
    setSummaryCount(60 - input.length);
  };

  const handleReviewBody = (input) => {
    setReviewBody(input);
    setBodyCount(input.length);
  };

  const handleSubmit = () => {
    console.log(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/product_id=${productId}&rating=${rating}&summary=${reviewSummary}&body=${reviewBody}&recommend=${recommend}&name=${reviewName}&email=${reviewerEmail}&photos=${images}&characteristics=${characteristics}`);
  };

  const remainingBody = bodyCount < 50 ? `Review must be a minimum of 50 characters. ${50 - bodyCount} characters remaining.` : `Characters remaining ${1500 - bodyCount}`;

  const fit = reviewMeta.reviewsMeta.characteristics.Fit
  && (
  <div className="row">
    {' '}
    Fit
    <input type="radio" name="fit" />
    <input type="radio" name="fit" />
    <input type="radio" name="fit" />
    <input type="radio" name="fit" />
    <input type="radio" name="fit" />
  </div>
  );

  const length = reviewMeta.reviewsMeta.characteristics.Length
  && (
  <div className="row">
    {' '}
    Length
    <input type="radio" name="length" />
    <input type="radio" name="length" />
    <input type="radio" name="length" />
    <input type="radio" name="length" />
    <input type="radio" name="length" />
  </div>
  );

  const size = reviewMeta.reviewsMeta.characteristics.Size
  && (
  <div className="row">
    {' '}
    Size
    <input type="radio" name="length" />
    <input type="radio" name="length" />
    <input type="radio" name="length" />
    <input type="radio" name="length" />
    <input type="radio" name="length" />
  </div>
  );

  return (
    <div className="container">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <h3 className="text-center">Write Your Review</h3>
      <h5 className="text-center">
        About the
        {' '}
        {product.product.name}
      </h5>
      <div className="row">
        Overall Rating
        &nbsp;
        <StarRatings
          starRatedColor="black"
          rating={starRating}
          numberOfStars={5}
          name="rating"
          starDimension="25px"
          starSpacing="2px"
          isSelectable
          changeRating={(rating) => { setRating(rating); }}
          starHoverColor="black"
        />
        &nbsp;
        &nbsp;
        {selectedRating}
      </div>
      <div className="row">
        Would you recommend this product?
        &nbsp;
        <button type="button" className="btn btn-link small" onChange={() => { setRecommend('Yes'); }}>Yes</button>
        &nbsp;
        <button type="button" className="btn btn-link small" onChange={() => { setRecommend('No'); }}>No</button>
      </div>
      <div className="container">
        Please rate the following about the product:
        &nbsp;
        <div className="row">
          {fit}
        </div>
        <div className="row">
          {length}
        </div>
      </div>
      <div className="row">
        <div>Review Summary:</div>
        <input placeholder="Please write a brief summary of your review here" className="w-100 small" onChange={(e) => { handleReviewSummary(e.target.value); }} />
        <div className="small text-right">
          Characters Remaining
          {' '}
          {summaryCount}
        </div>
      </div>
      <div className="row">
        <div>Review Body:</div>
        <input placeholder="Please write your full review here" className="w-100 small" onChange={(e) => { handleReviewBody(e.target.value); }} />
        <div className="small text-right">
          {remainingBody}
        </div>
      </div>
      <div className="row">
        <div>
          Upload up to 5 images of the product:
        </div>
        <div className="row small">
          <input type="file" className="small" style={{ padding: '8px' }} accept="image/png, image/jpeg" onChange={(file) => { handleFileChange(file); }} />
          <input type="file" className="small" style={{ padding: '8px' }} accept="image/png, image/jpeg" />
          <input type="file" className="small" style={{ padding: '8px' }} accept="image/png, image/jpeg" />
          <input type="file" className="small" style={{ padding: '8px' }} accept="image/png, image/jpeg" />
          <input type="file" className="small" style={{ padding: '8px' }} accept="image/png, image/jpeg" />
        </div>
      </div>
      <div className="row">
        <div>Reviewer Name:</div>
        <input placeholder="This is how you will appear on your review" className="w-100 small" onChange={(e) => { setReviewName(e.target.value); }} />
      </div>
      <div className="row">
        <div>Reviewer Email:</div>
        <input placeholder="This is only for our records and will not appear on review" className="w-100 small" onChange={(e) => { setReviewerEmail(e.target.value); }} />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit Review</button>
      </div>

    </div>

  );
};

export default AddReview;
