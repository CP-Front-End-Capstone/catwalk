/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import IndividualReview from './IndividualReview.jsx';
import productContext from '../../contexts/ProductContext';

const ReviewsList = (props) =>
  // const reviews = useContext(productContext);
  (
    <div>
      {props.selectedProduct.results.map((review) => (
        <ul key={review.review_id} className="border">
          <IndividualReview review={review} />
        </ul>
      ))}
    </div>

  );
export default ReviewsList;
