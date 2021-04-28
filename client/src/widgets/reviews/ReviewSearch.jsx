/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import reviewContext from '../../contexts/ReviewContext';

const ReviewSearch = () => {
  const reviews = useContext(reviewContext);
  const [searchValue, setSearchValue] = useState();

  const searchArray = (input) => {
    const searchedReviews = reviews.reviewList.results.filter((review) => (
      review.body.includes(input)));
      console.log(searchedReviews);
    reviews.setReviewsArray(searchedReviews);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchValue(e.target.value);

    if ((e.target.value).length > 3) {
      console.log('this is the searchValue', searchValue);
      searchArray(searchValue);
    } else {
      reviews.setReviewsArray(reviews.reviewList.results);
    }
  };

  return (
    <form>
      <label className="small">
        {' '}
        Search Reviews:
        {' '}
        <input name="search" onChange={(e) => { handleSearch(e); }} />

      </label>

    </form>

  );
};

export default ReviewSearch;
