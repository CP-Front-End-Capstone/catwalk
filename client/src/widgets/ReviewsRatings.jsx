import React from 'react';
import productContext from '../contexts/ProductContext.jsx';

class ReviewsRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Reviews & Ratings</h3>
        <div>
          this is selectedProduct:
          <productContext.Consumer>
            {(value) => value}
          </productContext.Consumer>
        </div>

      </div>
    );
  }
}

export default ReviewsRatings;
