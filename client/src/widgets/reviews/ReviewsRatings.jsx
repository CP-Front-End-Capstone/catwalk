/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import productContext from '../../contexts/ProductContext';
import ReviewsList from './ReviewsList.jsx';
import AddReview from './AddReview.jsx';

const dummyData = require('./dummydata.js');

class ReviewsRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId:
  <productContext.Consumer>
    {(value) => value.id}
  </productContext.Consumer>,
      reviewList: dummyData.dummyData.results,
      sort: 'relevant',
      reviewsMeta: {},
      addReview: null,

    };
  }

  addReviewClick() {
    this.setState({ addReview: true });
  }

  render() {
    return (
      <div className="reviewscontainer">
        <h3>Reviews & Ratings</h3>
        <div>
          Average Review: Stars
        </div>
        <div className="col-sm">
          <div className="container">
            <div className="row">
              <ReviewsList reviewList={this.state.reviewList} />
              <div className="col-sm">
                <button type="button">More Reviews</button>
              </div>
              <div className="col-sm">
                <button type="button">Add a Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsRatings;
