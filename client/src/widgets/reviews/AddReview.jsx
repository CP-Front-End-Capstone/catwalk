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
    console.log(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/product_id=${productId}&rating=${starRating}&summary=${reviewSummary}&body=${reviewBody}&recommend=${recommend}&name=${reviewName}&email=${reviewerEmail}&photos=${images}&characteristics=${characteristics}`);
  };

  const remainingBody = bodyCount < 50 ? `Review must be a minimum of 50 characters. ${50 - bodyCount} characters remaining.` : `Characters remaining ${1000 - bodyCount}`;

  const fit = reviewMeta.reviewsMeta.characteristics.Fit
  && (
  <div className="row small">
    <div className="col">Fit</div>
    <div className="col small">
      <div className="small">Runs Tight</div>
      <input type="radio" name="fit" />
    </div>
    <div className="col small">
      <div className="small">Slightly Tight</div>
      <input type="radio" name="fit" />
    </div>
    <div className="col small">
      <div className="small">Perfect</div>
      <input type="radio" name="fit" />
    </div>
    <div className="col small">
      <div className="small">Slightly Long</div>
      <input type="radio" name="fit" />
    </div>
    <div className="col small">
      <div className="small">Runs Long</div>
      <input type="radio" name="fit" />
    </div>
  </div>
  );

  const length = reviewMeta.reviewsMeta.characteristics.Length
  && (
  <div className="row small">
    <div className="col">Length</div>
    <div className="col small">
      <div className="small">Runs Short</div>
      <input type="radio" name="length" />
    </div>
    <div className="col small">
      <div className="small">Slightly Short</div>
      <input type="radio" name="length" />
    </div>
    <div className="col small">
      <div className="small">Perfect</div>
      <input type="radio" name="length" />
    </div>
    <div className="col small">
      <div className="small">Slightly Long</div>
      <input type="radio" name="length" />
    </div>
    <div className="col small">
      <div className="small">Runs Long</div>
      <input type="radio" name="length" />
    </div>
  </div>
  );

  const size = reviewMeta.reviewsMeta.characteristics.Size
  && (
  <div className="row small">
    <div className="col">Size</div>
    <div className="col small">
      <div className="small">A Size too Small</div>
      <input type="radio" name="size" />
    </div>
    <div className="col small">
      <div className="small">1/2 Size too Small</div>
      <input type="radio" name="size" />
    </div>
    <div className="col small">
      <div className="small">Perfect</div>
      <input type="radio" name="size" />
    </div>
    <div className="col small">
      <div className="small">1/2 Size too Big</div>
      <input type="radio" name="size" />
    </div>
    <div className="col small">
      <div className="small">A Size too Big</div>
      <input type="radio" name="size" />
    </div>
  </div>
  );

  const comfort = reviewMeta.reviewsMeta.characteristics.Comfort
  && (
  <div className="row small">
    <div className="col">Comfort</div>
    <div className="col small">
      <div className="small">Uncomfortable</div>
      <input type="radio" name="comfort" />
    </div>
    <div className="col small">
      <div className="small">Slightly Uncomfortable</div>
      <input type="radio" name="comfort" />
    </div>
    <div className="col small">
      <div className="small">Ok</div>
      <input type="radio" name="comfort" />
    </div>
    <div className="col small">
      <div className="small">Comfortable</div>
      <input type="radio" name="comfort" />
    </div>
    <div className="col small">
      <div className="small">Perfect</div>
      <input type="radio" name="comfort" />
    </div>
  </div>
  );

  const width = reviewMeta.reviewsMeta.characteristics.Width
  && (
  <div className="row small">
    <div className="col">Width</div>
    <div className="col small">
      <div className="small">Too Narrow</div>
      <input type="radio" name="width" />
    </div>
    <div className="col small">
      <div className="small">Slightly Narrow</div>
      <input type="radio" name="width" />
    </div>
    <div className="col small">
      <div className="small">Perfect</div>
      <input type="radio" name="width" />
    </div>
    <div className="col small">
      <div className="small">Slightly Wide</div>
      <input type="radio" name="width" />
    </div>
    <div className="col small">
      <div className="small">Too Wide</div>
      <input type="radio" name="width" />
    </div>
  </div>
  );

  const quality = reviewMeta.reviewsMeta.characteristics.Quality
  && (
  <div className="row small">
    <div className="col">Quality</div>
    <div className="col small">
      <div className="small">Poor</div>
      <input type="radio" name="quality" />
    </div>
    <div className="col small">
      <div className="small">Below Average</div>
      <input type="radio" name="quality" />
    </div>
    <div className="col small">
      <div className="small">As Expected</div>
      <input type="radio" name="quality" />
    </div>
    <div className="col small">
      <div className="small">Pretty Great</div>
      <input type="radio" name="quality" />
    </div>
    <div className="col small">
      <div className="small">Perfect</div>
      <input type="radio" name="quality" />
    </div>
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
        <div className="row">
          {size}
        </div>
        <div className="row">
          {width}
        </div>
        <div className="row">
          {comfort}
        </div>
        <div className="row">
          {quality}
        </div>
        <div className="row">
          {length}
        </div>
        <div className="row">
          {fit}
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
          <input type="file" className="small" accept="image/png, image/jpeg" onChange={(file) => { handleFileChange(file); }} />
          <input type="file" className="small" accept="image/png, image/jpeg" onChange={(file) => { handleFileChange(file); }}/>
          <input type="file" className="small" accept="image/png, image/jpeg" onChange={(file) => { handleFileChange(file); }}/>
          <input type="file" className="small" accept="image/png, image/jpeg" onChange={(file) => { handleFileChange(file); }}/>
          <input type="file" className="small" accept="image/png, image/jpeg" onChange={(file) => { handleFileChange(file); }}/>
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
