/* eslint-disable no-return-assign */
/* eslint-disable no-const-assign */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import StarRatings from 'react-star-ratings';
import { productContext } from '../../contexts/ProductContext.js';

const AddReview = () => {
  const product = useContext(productContext);
  const ratings = {
    '1 star': 'Poor', '2 stars': 'Fair', '3 stars': 'Average', '4 stars': 'Good', '5 stars': 'Great',
  };

  const selectedRating = null;

  const handleRating = (rating) => (
    selectedRating = ratings[rating]
  );

  return (
    <div className="container">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <h3 className="text-center">Write Your Review</h3>
      <h5 className="text-center">
        About the
        &nbsp;
        {product.product.name}
      </h5>
      <div className="row">
        Overall Rating
        &nbsp;
        <StarRatings
          starRatedColor="black"
          numberOfStars={5}
          name="rating"
          starDimension="25px"
          starSpacing="2px"
        />
        {selectedRating}
      </div>
      <div className="row">
        Would you recommend this product?
        &nbsp;
        <button type="button">Yes</button>
        &nbsp;
        <button type="button">No</button>
      </div>
      <div className="row">
        Please rate the following about the product (if applicable):
        &nbsp;
      </div>
      <div className="row">
        <div>Review Summary:</div>
        <input placeholder="Please write a brief summary of your review here" className="w-100 small" />
      </div>
      <div className="row">
        <div>Review Body:</div>
        <input placeholder="Please write your full review here" className="w-100 small" />
      </div>
      <div className="row">
        <div>
          Upload up to 5 images of the product:
        </div>
        <div className="row small">
          <button type="button" className="small" style={{ padding: '8px' }}>Choose Image</button>
          <button type="button" className="small" style={{ padding: '8px' }}>Choose Image</button>
          <button type="button" className="small" style={{ padding: '8px' }}>Choose Image</button>
          <button type="button" className="small" style={{ padding: '8px' }}>Choose Image</button>
          <button type="button" className="small" style={{ padding: '8px' }}>Choose Image</button>
        </div>
      </div>
      <div className="row">
        <div>Reviewer Name:</div>
        <input placeholder="This is how you will appear on your review" className="w-100 small" />
      </div>
      <div className="row">
        <div>Reviewer Email:</div>
        <input placeholder="This is only for our records and will not appear on review" className="w-100 small" />
      </div>

    </div>

  );
};

export default AddReview;
