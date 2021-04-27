/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { productContext } from '../../contexts/ProductContext.js';
import reviewContext from '../../contexts/ReviewContext.js';
import api from '../../../../API/helper';

function Stars(props) {
  const { productId } = useContext(productContext);
  const [reviewsMeta, setReviewsMeta] = useState();

  useEffect(() => {
    api.fetchEndpoint(`/reviews/meta/?product_id=${productId}`)
      .then((reviewMeta) => {
        setReviewsMeta(reviewMeta);
      })
      .catch((err) => {
        console.log('error fetching review data', err);
      });
  }, [productId]);

  const totalRatings = Number(reviewsMeta.recommended.true)
  + Number(reviewsMeta.recommended.false);

  const recommendPercent = Math.round(((Number(reviewsMeta.recommended.true) * 100)
  / (totalRatings)) * 10) / 10;

  const ratingsCountArray = (Object.values(reviewsMeta.ratings));
  const numbersArray = ratingsCountArray.map((number) => (
    Number(number)
  ));
  const largestCount = Math.max(...numbersArray);

  const avgCalc = ((Number((reviewsMeta.ratings[5])) * 5)
    + (Number((reviewsMeta.ratings[4])) * 4)
    + (Number((reviewsMeta.ratings[3])) * 3)
    + (Number((rreviewsMeta.ratings[2])) * 2)
    + (Number((reviewsMeta.ratings[1])))) / totalRatings;

  const formattedAvg = Math.round(avgCalc * 10) / 10;

  if (formattedAvg) {
    return (
      <div className="container" style={{ padding: '10px' }}>
        <div className="row">
          <h1>
            {formattedAvg}
            {' '}
            <StarRatings
              rating={formattedAvg}
              starRatedColor="black"
              numberOfStars={5}
              name="rating"
              starDimension="30px"
            />
          </h1>
        </div>
      </div>
    );
  }
  return <h1>Loading Stars</h1>;
}

export default Stars;
