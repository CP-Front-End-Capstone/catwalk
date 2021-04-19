import React from 'react';
import productContext from '../contexts/ProductContext';

class ReviewsRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId:
      <productContext.Consumer>
        {(value) => value.test}
      </productContext.Consumer>,

    };
  }

  render() {
    return (
      <div>
        <h3>Reviews & Ratings</h3>
        <div>
          this is selectedProduct:
          {this.state.productId}
        </div>

      </div>
    );
  }
}

export default ReviewsRatings;
