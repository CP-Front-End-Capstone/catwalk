/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { styleContext } from '../../contexts/StyleContext.js';
import api from '../../../../API/helper';

function Stars(props) {
  const { revMeta, styles } = useContext(styleContext);

  const totalRatings = Number(revMeta.recommended.true)
  + Number(revMeta.recommended.false);

  const ratingsCountArray = (Object.values(revMeta.ratings));
  const numbersArray = ratingsCountArray.map((number) => (
    Number(number)
  ));
  const largestCount = Math.max(...numbersArray);

  const avgCalc = ((Number((revMeta.ratings[5])) * 5)
    + (Number((revMeta.ratings[4])) * 4)
    + (Number((revMeta.ratings[3])) * 3)
    + (Number((revMeta.ratings[2])) * 2)
    + (Number((revMeta.ratings[1])))) / totalRatings;

  const formattedAvg = Math.round(avgCalc * 10) / 10;

  if (revMeta) {
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
