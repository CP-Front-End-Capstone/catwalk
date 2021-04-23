/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import HSBar from 'react-horizontal-stacked-bar-chart';
import StarRatings from 'react-star-ratings';
import reviewContext from '../../contexts/ReviewContext';
import starsContext from '../../contexts/StarsContext';
import Overview from '../overview/Overview.jsx';

const ReviewBreakDown = () => {
  const reviewMeta = useContext(reviewContext);

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

      <starsContext.provider value={{ starRating: formattedAvg }}>
        <Overview />
      </starsContext.provider>;

      if (recommendPercent) {
        return (
          <div>
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

            <div className="border small" style={{ padding: '20px' }}>
              <div>
                {recommendPercent}
                % of reviewers recommend this product
              </div>
              <a>
                5 Stars
                <HSBar height={10} data={[{ value: fiveStars, color: 'black' }, { value: 100 - fiveStars, color: 'grey' }]} />
              </a>
              <a>
                4 Stars
                <HSBar height={10} data={[{ value: fourStars, color: 'black' }, { value: 100 - fourStars, color: 'grey' }]} />
              </a>
              <a>
                3 Stars
                <HSBar height={10} data={[{ value: threeStars, color: 'black' }, { value: 100 - threeStars, color: 'grey' }]} />
              </a>
              <a>
                2 Stars
                <HSBar height={10} data={[{ value: twoStars, color: 'black' }, { value: 100 - twoStars, color: 'grey' }]} />
              </a>
              <a>
                1 Star
                <HSBar height={10} data={[{ value: oneStar, color: 'black' }, { value: 100 - oneStar, color: 'grey' }]} />
              </a>
            </div>
          </div>

        );
      }
      return 'Review Breakdown is loading';
};
export default ReviewBreakDown;
