/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import productContext from '../../contexts/ProductContext.js';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = {
  //     productName:
  // <productContext.Consumer>
  //   {(value) => value.name}
  // </productContext.Consumer>,
  //   };
  }

  render() {
    return this.state.productName;
  }
}

export default AddReview;
