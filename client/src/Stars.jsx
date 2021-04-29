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
    const ratingsCountArray = (Object.values(product.reviewsMeta.ratings));
    const numbersArray = ratingsCountArray.map((number) => (
      Number(number)
    ));
    const largestCount = Math.max(...numbersArray);

    const fiveStars = (product.reviewsMeta.ratings[5])
      ? (product.reviewsMeta.ratings[5]) : 0;
    const fourStars = (product.reviewsMeta.ratings[4])
      ? (product.reviewsMeta.ratings[4]) : 0;
    const threeStars = (product.reviewsMeta.ratings[3])
      ? (product.reviewsMeta.ratings[3]) : 0;
    const twoStars = (product.reviewsMeta.ratings[2])
      ? (product.reviewsMeta.ratings[2]) : 0;
    const oneStar = (product.reviewsMeta.ratings[1])
      ? (product.reviewsMeta.ratings[1]) : 0;

    const totalRatings = Number(fiveStars) + Number(fourStars)
    + Number(threeStars) + Number(twoStars) + Number(oneStar);

    console.log(totalRatings);

    const avgCalc = (((Number(fiveStars)) * 5)
      + (Number(fourStars) * 4)
      + (Number(threeStars) * 3)
      + (Number(twoStars) * 2)
      + (Number(oneStar))) / totalRatings;

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
