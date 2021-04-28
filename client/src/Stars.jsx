/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { productContext } from './contexts/ProductContext.js';
import api from '../../API/helper';

const Stars = (props) => {
  const product = useContext(productContext);

  if (product.reviewsMeta && Object.keys(product.reviewsMeta.ratings).length > 0) {
    const totalRatings = Number(product.reviewsMeta.recommended.true)
    + Number(product.reviewsMeta.recommended.false);

    const ratingsCountArray = (Object.values(product.reviewsMeta.ratings));
    const numbersArray = ratingsCountArray.map((number) => (
      Number(number)
    ));
    const largestCount = Math.max(...numbersArray);

    const avgCalc = ((Number((product.reviewsMeta.ratings[5])) * 5)
      + (Number((product.reviewsMeta.ratings[4])) * 4)
      + (Number((product.reviewsMeta.ratings[3])) * 3)
      + (Number((product.reviewsMeta.ratings[2])) * 2)
      + (Number((product.reviewsMeta.ratings[1])))) / totalRatings;

    const formattedAvg = Math.round(avgCalc * 10) / 10;

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
  return (
    <h1>
      &nbsp;
    </h1>
  );
};

export default Stars;
