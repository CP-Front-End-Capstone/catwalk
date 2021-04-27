/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import reviewContext from '../../contexts/ReviewContext';
import { productContext } from '../../contexts/ProductContext';

const RelatedReviews = () => {
  const reviewMeta = useContext(reviewContext);
  const [selectedRating, setSelectedRating] = useState(['1', '2', '3', '4', '5']);

  const totalRatings = Number(reviewMeta.reviewsMeta.recommended.true)
  + Number(reviewMeta.reviewsMeta.recommended.false);

  const recommendPercent = Math.round(((Number(reviewMeta.reviewsMeta.recommended.true) * 100)
  / (totalRatings)) * 10) / 10;

  const ratingsCountArray = (Object.values(reviewMeta.reviewsMeta.ratings));
  const numbersArray = ratingsCountArray.map((number) => (
    Number(number)
  ));
  const largestCount = Math.max(...numbersArray);

  const avgCalc = ((Number((reviewMeta.reviewsMeta.ratings[5])) * 5)
    + (Number((reviewMeta.reviewsMeta.ratings[4])) * 4)
    + (Number((reviewMeta.reviewsMeta.ratings[3])) * 3)
    + (Number((reviewMeta.reviewsMeta.ratings[2])) * 2)
    + (Number((reviewMeta.reviewsMeta.ratings[1])))) / totalRatings;

  const formattedAvg = Math.round(avgCalc * 10) / 10;

  const passStars = useContext(productContext);
  console.log('pass stars: ', passStars);

  passStars.changeStarAvg(formattedAvg);

  const handleRatingFilter = (rating) => {
    const selectedArray = selectedRating.slice();
    if (selectedRating.length === 5) {
      setSelectedRating([rating]);
    } else if (selectedArray.indexOf(rating) > -1) {
      if (selectedArray.length > 1) {
        selectedArray.splice(selectedArray.indexOf(rating), 1);
        setSelectedRating(selectedArray);
      } else {
        setSelectedRating(['1', '2', '3', '4', '5']);
      }
    } else {
      selectedArray.push(rating);
      setSelectedRating(selectedArray);
    }
  };

  const fiveStars = (reviewMeta.reviewsMeta.ratings[5])
    ? ((reviewMeta.reviewsMeta.ratings[5] * 100) / largestCount) : 0;
  const fourStars = (reviewMeta.reviewsMeta.ratings[4])
    ? ((reviewMeta.reviewsMeta.ratings[4] * 100) / largestCount) : 0;
  const threeStars = (reviewMeta.reviewsMeta.ratings[3])
    ? ((reviewMeta.reviewsMeta.ratings[3] * 100) / largestCount) : 0;
  const twoStars = (reviewMeta.reviewsMeta.ratings[2])
    ? ((reviewMeta.reviewsMeta.ratings[2] * 100) / largestCount) : 0;
  const oneStar = (reviewMeta.reviewsMeta.ratings[1])
    ? ((reviewMeta.reviewsMeta.ratings[1] * 100) / largestCount) : 0;
};
export default RelatedReviews;
