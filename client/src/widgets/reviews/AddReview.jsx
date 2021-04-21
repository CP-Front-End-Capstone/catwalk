import React from 'react';
import productContext from '../../contexts/ProductContext';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName:
  <productContext.Consumer>
    {(value) => value.name}
  </productContext.Consumer>,
    };
  }

  render() {
    return this.state.productName;
  }
}

export default AddReview;
