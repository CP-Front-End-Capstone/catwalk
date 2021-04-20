import React from 'react';
import productContext from '../../contexts/ProductContext';
import ReviewsList from './ReviewsList.jsx';

class ReviewsRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId:
  <productContext.Consumer>
    {(value) => value.id}
  </productContext.Consumer>,

    };
  }

  render() {
    return (
      <div>
        <h3>Reviews & Ratings</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              Review Breakdown
            </div>
            <div className="col-sm">
              <ReviewsList/>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <button>More Reviews</button>

                  </div>
                  <div className="col-sm">
                  <button>Add a Review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              Product Breakdown
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsRatings;
