/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ProductContext from './contexts/ProductContext.jsx';
import ReviewsRatings from './widgets/ReviewsRatings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
    };
  }

  render() {
    console.log(this.context);
    return (
      <div>

        <h1>Hello Even Bigger Earth!</h1>
        <div>
          <ProductContext.Provider value={this.state.selectedProduct}>
            <ReviewsRatings />
          </ProductContext.Provider>
        </div>
      </div>

    );
  }
}

App.contextType = ProductContext;

export default App;
