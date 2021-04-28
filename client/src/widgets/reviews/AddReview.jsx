/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable no-const-assign */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { productContext } from '../../contexts/ProductContext.js';
import reviewContext from '../../contexts/ReviewContext';

const config = require('../../../../API/config.js');

const AddReview = () => {
  const product = useContext(productContext);
  const reviewMeta = useContext(reviewContext);
  const ratings = {
    1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great',
  };
  const { productId } = product;
  const [recommend, setRecommend] = useState(null);
  const [starRating, setRating] = useState(0);
  const [reviewSummary, setReviewSummary] = useState(null);
  const [reviewBody, setReviewBody] = useState(null);
  const [images, setImages] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews',
      data: {
        product_id: Number(productId),
        rating: starRating,
        summary: reviewSummary,
        body: reviewBody,
        recommend,
        name: reviewName,
        email: reviewerEmail,
        photos: images,
        characteristics,
      },
      headers: {
        Authorization: config.TOKEN,
      },
    })
      .then(() => {
        console.log('this is what was submitted',
          {
            product_id: Number(productId),
            rating: starRating,
            summary: reviewSummary,
            body: reviewBody,
            recommend,
            name: reviewName,
            email: reviewerEmail,
            photos: images,
            characteristics,

          });
      })
      .catch((err) => {
        console.log('error posting review to API', err);
      });
  };

  const handleCharacteristicClick = (id, value) => {
    characteristics[id] = value;
  };

  const uploadImages = images.length < 5 && <input type="file" className="small" accept="image/png, image/jpeg" onChange={(file) => { handleFileChange(file); }} />;

  const remainingBody = bodyCount < 50 ? `Review must be a minimum of 50 characters. ${50 - bodyCount} characters remaining.` : `Characters remaining ${1000 - bodyCount}`;

  const characteristicObj = {
    Fit: ['Runs Tight', 'Slightly Tight', 'Perfect', 'Slightly Long', 'Runs Long'],
    Length: ['Runs Short', 'Slightly Short', 'Perfect', 'Slightly Long', 'Runs Long'],
    Quality: ['Poor', 'Below Average', 'What I Expected', 'Pretty Great', 'Perfect'],
    Comfort: ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Width: ['Too narrow', 'Slight Narrow', 'Perfect', 'Slightly Wide', 'Too Wide'],
    Size: ['A Size too Small', '1/2 Size too Small', 'Perfect', '1/2 Size too Big', 'A Size too Big'],
  };

  const createCharacteristic = (name) => {
    const charact = reviewMeta.reviewsMeta.characteristics[name] && (
    <div className="row small">
      <div className="col">{name}</div>
      <div className="col small">
        <div className="small">{characteristicObj[name][0]}</div>
        <input type="radio" name={name} onClick={() => { handleCharacteristicClick(reviewMeta.reviewsMeta.characteristics[name].id, 1); }} />
      </div>
      <div className="col small">
        <div className="small">{characteristicObj[name][1]}</div>
        <input type="radio" name={name} onClick={() => {handleCharacteristicClick(reviewMeta.reviewsMeta.characteristics[name].id, 2); } } />
      </div>
      <div className="col small">
        <div className="small">{characteristicObj[name][2]}</div>
        <input type="radio" name={name} onClick={() => {handleCharacteristicClick(reviewMeta.reviewsMeta.characteristics[name].id, 3)}} />
      </div>
      <div className="col small">
        <div className="small">{characteristicObj[name][3]}</div>
        <input type="radio" name={name} onClick={() => {handleCharacteristicClick(reviewMeta.reviewsMeta.characteristics[name].id, 4)}} />
      </div>
      <div className="col small">
        <div className="small">{characteristicObj[name][4]}</div>
        <input type="radio" name={name} onClick={() => {handleCharacteristicClick(reviewMeta.reviewsMeta.characteristics[name].id, 5)}} />
      </div>
    </div>
    );
    return charact;
  };

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
        <button type="button" className="btn btn-link small" onClick={() => { setRecommend(true); }}>Yes</button>
        &nbsp;
        <button type="button" className="btn btn-link small" onClick={() => { setRecommend(false); }}>No</button>
      </div>
      <div className="container">
        Please rate the following about the product:
        <div className="row">
          {createCharacteristic('Size')}
        </div>
        <div className="row">
          {createCharacteristic('Width')}
        </div>
        <div className="row">
          {createCharacteristic('Comfort')}
        </div>
        <div className="row">
          {createCharacteristic('Quality')}
        </div>
        <div className="row">
          {createCharacteristic('Length')}
        </div>
        <div className="row">
          {createCharacteristic('Fit')}
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
        <div className="container small">
          {uploadImages}
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
        <button type="button" className="btn btn-primary" onClick={(e) => { handleSubmit(e); }}>Submit Review</button>
      </div>

    </div>

  );
};

export default AddReview;
